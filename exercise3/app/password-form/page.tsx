
"use client";

import { useActionState } from "react";
import { validatePassword, PasswordState } from "./actions";

const initialState: PasswordState = {
  success: false,
  message: "",
  error: ""
};

export default function PasswordFormPage() {

  const [state, formAction, isPending] =
    useActionState(validatePassword, initialState);

  return (
    <div className="max-w-md mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        Registration Form
      </h1>

      <form action={formAction} className="space-y-4">

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          className="border p-2 w-full rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          className="border p-2 w-full rounded"
        />

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white p-2 rounded"
        >
          {isPending ? "Submitting..." : "Register"}
        </button>

        {state.success && (
          <p className="text-green-600">
            {state.message}
          </p>
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
