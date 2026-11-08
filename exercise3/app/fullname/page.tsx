
"use client";

import { useActionState } from "react";
import { greetUser, GreetingState } from "./actions";

const initialState: GreetingState = {
  success: false,
  message: "",
  error: ""
};

export default function FullNamePage() {

  const [state, formAction, isPending] =
    useActionState(greetUser, initialState);

  return (
    <div className="max-w-md mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        Full Name Greeting
      </h1>

      <form action={formAction} className="space-y-4">

        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          required
          className="border p-2 w-full rounded"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          required
          className="border p-2 w-full rounded"
        />

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white p-2 rounded"
        >
          {isPending ? "Processing..." : "Submit"}
        </button>

        {state.success && (
          <h2 className="text-green-600 font-bold">
            {state.message}
          </h2>
        )}

        {state.error && (
          <p className="text-red-600">
            {state.error}
          </p>
        )}

      </form>
    </div>
  );
}
