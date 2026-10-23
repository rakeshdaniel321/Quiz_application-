export default function ProgressBar({ current, total }) {
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-stone-200"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current + 1}
    >
      <div
        className="h-full bg-teal-600 transition-all"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  );
}