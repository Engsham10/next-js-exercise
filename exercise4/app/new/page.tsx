"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createTodoAction } from "../actions/create";

export default function NewTodo() {
  const [state, formAction, isPending] = useActionState(
    createTodoAction,
    null
  );

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-2xl font-bold mb-6">
          Create New Todo
        </h1>

        <form action={formAction} className="space-y-5">

          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-medium"
            >
              Todo Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter your task..."
              maxLength={200}
              required
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block mb-2 font-medium"
            >
              Priority
            </label>

            <select
              id="priority"
              name="priority"
              defaultValue="medium"
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {state?.error && (
            <p className="text-red-600">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? "Creating..." : "Create Todo"}
          </button>

          <Link
            href="/"
            className="block text-center text-gray-600 hover:underline"
          >
            Back to Todos
          </Link>
        </form>
      </div>
    </main>
  );
}