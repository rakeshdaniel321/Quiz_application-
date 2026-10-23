import { useLocation, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm.jsx";
import useQuiz from "../hooks/useQuiz.js";

export default function NamePage() {
  const { dispatch } = useQuiz();
  const navigate = useNavigate();
  const { state: nav } = useLocation();

  const handleSubmit = (name) => {
    dispatch({ type: "SET_USER", name });
    navigate(nav?.from ?? "/", { replace: true }); // click pannina card ku poidum
  };

  return <UserForm onSubmit={handleSubmit} />;
}