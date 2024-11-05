"use client";

import { createUser } from "@/utils/actions";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
//styles
const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded capitalize";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={btnStyle} disabled={pending} type="submit">
      {!pending ? "Submit" : "Submitting..."}
    </button>
  );
};

function Form() {
  const [message, action] = useFormState(createUser, null);
  return (
    <form action={action} className={formStyle}>
      <p>{message}</p>
      <h2 className="text-2xl capitalize mb-4">Create user</h2>
      <input
        className={inputStyle}
        type="text"
        name="firstName"
        defaultValue="Johny"
        required
      />
      <input
        className={inputStyle}
        type="text"
        name="lastName"
        defaultValue="Star"
        required
      />
      <SubmitButton />
    </form>
  );
}

export default Form;
