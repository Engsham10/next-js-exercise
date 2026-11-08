import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchTodoById } from "../../lib/todo";
import { updateTodoAction } from "../../actions/update";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditTodoPage({ params }: Props) {
  const { id } = await params;

  const todo = await fetchTodoById(id);

  if (!todo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-2xl font-bold mb-6">
          Edit Todo
        </h1>

        <form action={updateTodoAction} className="space-y-5">
          <input type="hidden" name="id" value={todo._id} />

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
              defaultValue={todo.title}
              maxLength={200}
              required
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <p className="text-gray-500 text-sm">
            Status: {todo.completed ? "Completed" : "Pending"}
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Update Todo
          </button>

          <Link
            href="/"
            className="block text-center text-gray-600"
          >
            Cancel
          </Link>
        </form>
      </div>
    </main>
  );
}