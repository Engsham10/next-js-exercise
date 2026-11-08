"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchTodoById, updateTodo } from "../lib/todo";

export async function updateTodoAction(formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title");

  if (typeof id !== "string" || !id) return;

  if (typeof title !== "string" || !title.trim()) return;

  if (title.trim().length > 200) return;

  const existingTodo = await fetchTodoById(id);

  if (!existingTodo) return;

  const success = await updateTodo(id, {
    title: title.trim(),
  });

  if (!success) return;

  revalidatePath("/");
  redirect("/");
}