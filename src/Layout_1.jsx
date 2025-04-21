import { Link, Outlet } from "react-router-dom";
import Sidebar from "./components/Menus/Sidebar";

function Layout() {
  return (
    <div
      id="page-container"
      className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 transition-all duration-300 ease-out dark:bg-gray-800 dark:text-gray-200"
    >
      <Sidebar />

      <main
        id="page-content"
        className="flex flex-1 flex-col pt-16" // flex-1 faz o conteúdo principal ocupar o espaço restante
      >
        {/* RENDERIZA A ROTA FILHA AQUI */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

