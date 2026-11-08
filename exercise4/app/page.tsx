import Link from "next/link";
import { fetchTodos } from "./lib/todo";
import { toggleTodo } from "./actions/toggle";
import { deleteTodo } from "./actions/delete";

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              My Todo App
            </h1>
            <p className="text-gray-500 mt-2">
              Manage your daily tasks
            </p>
          </div>

          <Link
            href="/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Todo
          </Link>
        </div>

        {todos.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No todos yet. Create your first task!
          </p>
        ) : (
          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo._id}
                className="flex flex-wrap items-center justify-between gap-3 border rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <form action={toggleTodo.bind(null, todo._id)}>
                    <button type="submit" className="text-2xl">
                      {todo.completed ? "✅" : "⬜"}
                    </button>
                  </form>

                  <div>
                    <p
                      className={`font-medium ${
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {todo.title}
                    </p>

                    <p className="text-xs text-gray-500">
                      Priority: {todo.priority ?? "medium"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/edit/${todo._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <form action={deleteTodo.bind(null, todo._id)}>
                    <button
                      type="submit"
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}