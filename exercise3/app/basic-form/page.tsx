
import { submitEmail } from "./actions";

export default function BasicFormPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Email Submission Form
      </h1>

      <form action={submitEmail} className="space-y-4">

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="border p-2 w-full rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Submit
        </button>

      </form>
    </div>
  );
}
