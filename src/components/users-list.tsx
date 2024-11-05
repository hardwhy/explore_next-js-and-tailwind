import { fetchUsers } from "@/utils/actions";
import React from "react";
import DeleteButton from "./delete-button";

async function UsersList() {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        users.map((u) => {
          return (
            <h4
              key={u.id}
              className="capitalize text-lg flex justify-between items-center mb-2"
            >
              {u.firstName} {u.lastName}
              <DeleteButton id={u.id} />
            </h4>
          );
        })
      ) : (
        <p>No users found...</p>
      )}{" "}
    </div>
  );
}

export default UsersList;
