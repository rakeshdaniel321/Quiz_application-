import { Navigate, Outlet, useLocation } from "react-router-dom";
import useQuiz from "../hooks/useQuiz.js";
import { isValidUser } from "../utils/validators.js";

// user null / empty / "unknown" na name page ku anuppum
export default function RequireUser() {
  const { state } = useQuiz();
  const location = useLocation();

  if (!isValidUser(state.user)) {
    return <Navigate to="/name" replace state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}