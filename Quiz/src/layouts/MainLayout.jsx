import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}