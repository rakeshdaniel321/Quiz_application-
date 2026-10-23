import { Navigate, useNavigate, useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar.jsx";
import QuestionForm from "../components/QuestionForm.jsx";
import useQuiz from "../hooks/useQuiz.js";
import { calcScore } from "../utils/quiz.js";
import quizzes from "../data/dummyData.json";

export default function QuizPage() {
  const { id } = useParams();
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();

  const quiz = quizzes.find((q) => q.id === id);
  if (!quiz) return <Navigate to="/" replace />;
  if (state.results[id]) return <Navigate to={`/result/${id}`} replace />;

  // progress localStorage la irundhu varum, so reload pannina resume aagum
  const { current, answers } = state.progress[id] ?? { current: 0, answers: {} };
  const total = quiz.questions.length;
  const question = quiz.questions[current];
  const isLast = current === total - 1;
  const answered = answers[current] !== undefined;

  const go = (index) => dispatch({ type: "GO", quizId: id, index });

  const handleNext = () => {
    if (!isLast) return go(current + 1);
    dispatch({ type: "FINISH", quizId: id, score: calcScore(quiz, answers), total });
    navigate(`/result/${id}`, { replace: true });
  };

  return (
    <div className="mx-auto max-w-xl rounded-xl border border-stone-200 bg-white p-6">
      <h1 className="mb-3 font-semibold text-teal-700">{quiz.title}</h1>
      <ProgressBar current={current} total={total} />

      <div className="mt-6">
        <QuestionForm
          question={question}
          index={current}
          total={total}
          selected={answers[current]}
          onSelect={(option) =>
            dispatch({ type: "ANSWER", quizId: id, qIndex: current, option })
          }
        />
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => go(current - 1)}
          disabled={current === 0}
          className="rounded-lg border border-stone-300 px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!answered}
          className="rounded-lg bg-teal-700 px-5 py-2 font-medium text-white disabled:opacity-40"
        >
          {isLast ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}