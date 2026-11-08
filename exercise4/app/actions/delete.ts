"use server";

import { revalidatePath } from "next/cache";
import { deleteTodo as deleteTodoFromDB } from "../lib/todo";

export async function deleteTodo(id: string) {
  if (!id) return;

  const success = await deleteTodoFromDB(id);

  if (success) {
    revalidatePath("/");
  }
}