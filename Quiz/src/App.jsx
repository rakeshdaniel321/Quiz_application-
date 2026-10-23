import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import RequireUser from "./components/RequireUser.jsx";

// Lazy load: each page is a separate chunk
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NamePage = lazy(() => import("./pages/NamePage.jsx"));
const QuizPage = lazy(() => import("./pages/QuizPage.jsx"));
const ResultPage = lazy(() => import("./pages/ResultPage.jsx"));

export default function App() {
  return (
    <Suspense fallback={<p className="p-10 text-center text-stone-500">Loading…</p>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/name" element={<NamePage />} />
          <Route element={<RequireUser />}>
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/result/:id" element={<ResultPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}