"use client";

import React from "react";

export default function ToursError(props: { error: Error }) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{props.error.message}</p>
    </div>
  );
}
