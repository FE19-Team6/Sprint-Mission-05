import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="container flex-1 py-10">
        <Outlet />
      </main>
    </div>
  );
}
