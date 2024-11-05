"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

type User = {
  firstName: string;
  lastName: string;
  id: string;
};

export const createUser = async (prevState: any, data: FormData) => {
  "use server";

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = data.get("firstName") as string;
  const lastName = data.get("lastName") as string;
  const user: User = { firstName, lastName, id: Date.now().toString() };
  try {
    await saveUser(user);
    revalidatePath("/actions");
    return "User successfully created";
  } catch (error) {
    console.log("error while creating user", error);
    return "Failed to create User";
  }
  // redirect('/');
  // const rawData = Object.fromEntries(data);
  // console.log(rawData);

  // console.log({ firstName, lastName });
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  console.log(users);

  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((u) => u.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};
export const removeUser = async (formData: FormData) => {

  const id = formData.get("id") as string;
};
