import { ObjectId } from "mongodb";
import { getTodoCollection } from "./db";
import type {
  Todo,
  CreateTodoInput,
  UpdateTodoInput,
} from "../types/todo";

function toTodo(document: any): Todo {
  return {
    _id: document._id.toString(),
    title: document.title,
    completed: document.completed,
    createdAt: document.createdAt?.toISOString(),
    updatedAt: document.updatedAt?.toISOString(),
    priority: document.priority ?? "medium",
  };
}

export async function fetchTodos(): Promise<Todo[]> {
  try {
    const collection = await getTodoCollection();

    const documents = await collection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return documents.map(toTodo);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
}

export async function fetchTodoById(
  id: string
): Promise<Todo | null> {
  try {
    if (!ObjectId.isValid(id)) return null;

    const collection = await getTodoCollection();

    const document = await collection.findOne({
      _id: new ObjectId(id),
    });

    return document ? toTodo(document) : null;
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
}

export async function createTodo(
  todo: CreateTodoInput
): Promise<string | null> {
  try {
    const collection = await getTodoCollection();

    const now = new Date();

    const result = await collection.insertOne({
      title: todo.title,
      completed: todo.completed ?? false,
      priority: todo.priority ?? "medium",
      createdAt: now,
      updatedAt: now,
    });

    return result.insertedId.toString();
  } catch (error) {
    console.error("Error creating todo:", error);
    return null;
  }
}

export async function updateTodo(
  id: string,
  todo: UpdateTodoInput
): Promise<boolean> {
  try {
    if (!ObjectId.isValid(id)) return false;

    const collection = await getTodoCollection();

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...todo, updatedAt: new Date() } }
    );

    return result.matchedCount > 0;
  } catch (error) {
    console.error("Error updating todo:", error);
    return false;
  }
}

export async function deleteTodo(id: string): Promise<boolean> {
  try {
    if (!ObjectId.isValid(id)) return false;

    const collection = await getTodoCollection();

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return false;
  }
}