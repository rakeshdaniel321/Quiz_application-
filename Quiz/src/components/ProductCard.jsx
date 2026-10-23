const BADGE = {
  new: "bg-stone-100 text-stone-600",
  progress: "bg-amber-100 text-amber-800",
  done: "bg-emerald-100 text-emerald-800",
};

export default function ProductCard({ quiz, status, result, onSelect }) {
  const label =
    status === "done"
      ? `Done · ${result.score}/${result.total}`
      : status === "progress"
      ? "In progress"
      : "Not started";

  return (
    <button
      onClick={() => onSelect(quiz.id)}
      className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-5 text-left transition hover:border-teal-600 hover:shadow focus-visible:outline-2 focus-visible:outline-teal-600"
    >
      <span className="text-3xl" aria-hidden="true">{quiz.icon}</span>
      <div>
        <h3 className="font-semibold">{quiz.title}</h3>
        <p className="mt-1 text-sm text-stone-500">{quiz.description}</p>
      </div>
      <span className={`mt-auto w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${BADGE[status]}`}>
        {label}
      </span>
    </button>
  );
}