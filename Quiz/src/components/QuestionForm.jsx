export default function QuestionForm({ question, index, total, selected, onSelect }) {
  return (
    <fieldset>
      <legend className="text-sm text-stone-500">Question {index + 1} of {total}</legend>
      <h2 className="mt-2 text-xl font-semibold">{question.question}</h2>

      <div className="mt-5 space-y-3">
        {question.options.map((opt, i) => (
          <label
            key={i}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition ${
              selected === i ? "border-teal-600 bg-teal-50" : "border-stone-200 bg-white hover:border-stone-400"
            }`}
          >
            <input
              type="radio"
              name={`q-${question.id}`}
              checked={selected === i}
              onChange={() => onSelect(i)}
              className="h-4 w-4 accent-teal-700"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}