export type Todo = {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
};

export type CreateTodoInput = {
  title: string;
  completed?: boolean;
  priority?: "low" | "medium" | "high";
  createdAt?: Date;
  updatedAt?: Date;
};

export type UpdateTodoInput = {
  title?: string;
  completed?: boolean;
  priority?: "low" | "medium" | "high";
  updatedAt?: Date;
};

export type TodoPriority = "low" | "medium" | "high";

export type TodoFormState = {
  error?: string;
  success?: string;
} | null;