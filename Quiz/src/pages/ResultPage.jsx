import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useQuiz from "../hooks/useQuiz.js";
import quizzes from "../Data/DummyData.json"

export default function ResultPage() {
  const { id } = useParams();
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();

  const quiz = quizzes.find((q) => q.id === id);
  const result = state.results[id];
  if (!quiz || !result) return <Navigate to="/" replace />;

  const handleRetry = () => {
    dispatch({ type: "RETRY", quizId: id }); // old result + progress clear
    navigate(`/quiz/${id}`, { replace: true });
  };

  return (
    <div className="mx-auto max-w-md rounded-xl border border-stone-200 bg-white p-8 text-center">
      <p className="text-stone-500">{quiz.title}</p>
      <h1 className="mt-1 text-2xl font-bold">{result.user}</h1>
      <p className="mt-6 text-6xl font-bold text-teal-700">
        {result.score}
        <span className="text-3xl text-stone-400">/{result.total}</span>
      </p>

      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="rounded-lg border border-stone-300 px-4 py-2">Home</Link>
        <button
          onClick={handleRetry}
          className="rounded-lg bg-teal-700 px-5 py-2 font-medium text-white"
        >
          Retry
        </button>
      </div>
    </div>
  );
}