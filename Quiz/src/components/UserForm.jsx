import { useState } from "react";
import { validateName } from "../utils/validators.js";

export default function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateName(name);
    if (err) return setError(err);
    onSubmit(name.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-xl border border-stone-200 bg-white p-6">
      <h1 className="text-2xl font-bold">What should we call you?</h1>
      <p className="mt-1 text-sm text-stone-500">Your name is shown on the result page.</p>

      <label htmlFor="username" className="mt-5 block text-sm font-medium">Name</label>
      <input
        id="username"
        value={name}
        autoFocus
        onChange={(e) => { setName(e.target.value); setError(""); }}
        aria-invalid={!!error}
        className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
        placeholder="Letters only, e.g. Rakesh AKM"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      <button className="mt-5 w-full rounded-lg bg-teal-700 py-2.5 font-medium text-white hover:bg-teal-800">
        Start quiz
      </button>
    </form>
  );
}