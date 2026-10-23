import { Link } from "react-router-dom";
import useQuiz from "../hooks/useQuiz.js";
import { isValidUser } from "../utils/validators.js";

export default function Header() {
  const { state } = useQuiz();
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-teal-700">QuizHub</Link>
        {isValidUser(state.user) && (
          <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
            Hi, {state.user}
          </span>
        )}
      </div>
    </header>
  );
}