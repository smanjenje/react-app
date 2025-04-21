import { Outlet } from "react-router-dom";
import Sidebar from "./components/Menus/Sidebar";
import { useMenu } from "./hooks/MenuProvider";
import Header from "./components/Menus/Header";

function Layout() {
  const { isMenuOpen, darkMode } = useMenu();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 transition-all duration-300 ease-out dark:bg-gray-800 dark:text-gray-200 
          ${isMenuOpen ? "lg:ps-64" : ""}`}
      >
        <Sidebar />
        <Header />
        <main
          id="page-content"
          className={`flex max-w-full flex-auto flex-col pt-16`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
