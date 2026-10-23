import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import useQuiz from "../hooks/useQuiz.js";
import quizzes from "../Data/DummyData.json";

export default function HomePage() {
  const { state } = useQuiz();
  const navigate = useNavigate();

  const getStatus = (id) =>
    state.results[id] ? "done" : state.progress[id] ? "progress" : "new";

  // /quiz/:id la RequireUser guard irukku, user illana name kekkum
  const handleSelect = (id) => navigate(`/quiz/${id}`);

  return (
    <>
      <h1 className="text-3xl font-bold">Pick a quiz</h1>
      <p className="mt-1 text-stone-500">5 questions each. Pick any card.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <ProductCard
            key={quiz.id}
            quiz={quiz}
            status={getStatus(quiz.id)}
            result={state.results[quiz.id]}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </>
  );
}