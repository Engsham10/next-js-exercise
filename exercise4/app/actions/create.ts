"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createTodo } from "../lib/todo";
import type { TodoFormState } from "../types/todo";

export async function createTodoAction(
  _prevState: TodoFormState,
  formData: FormData
): Promise<TodoFormState> {
  const title = formData.get("title");
  const priority = formData.get("priority");

  if (typeof title !== "string" || !title.trim()) {
    return { error: "Todo title is required." };
  }

  if (title.trim().length > 200) {
    return { error: "Title must be 200 characters or fewer." };
  }

  const allowedPriorities = ["low", "medium", "high"];

  const selectedPriority =
    typeof priority === "string" &&
    allowedPriorities.includes(priority)
      ? (priority as "low" | "medium" | "high")
      : "medium";

  const todoId = await createTodo({
    title: title.trim(),
    priority: selectedPriority,
  });

  if (!todoId) {
    return { error: "Unable to create todo." };
  }

  revalidatePath("/");
  redirect("/");
}