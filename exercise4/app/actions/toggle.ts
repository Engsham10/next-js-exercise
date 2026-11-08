"use server";

import { revalidatePath } from "next/cache";
import { fetchTodoById, updateTodo } from "../lib/todo";

export async function toggleTodo(id: string) {
  if (!id) return;

  const todo = await fetchTodoById(id);

  if (!todo) return;

  await updateTodo(id, {
    completed: !todo.completed,
  });

  revalidatePath("/");
}