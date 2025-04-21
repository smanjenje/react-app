import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Usando React Router
import { useMenu } from "../../hooks/useMenu";


function Sidebar() {
  const { stateMenu, toggleDarkMode, closeMenu } = useMenu();
  const location = useLocation(); // Para verificar o caminho atual
  const navigate = useNavigate(); // Para navegação programática

  const handleClick = (path) => {
    if (stateMenu.isMenuOpen) {
      closeMenu("isMenuOpen");
    }
    navigate(path); // Navega para o caminho da rota
    closeMenu("userDropdownOpen"); // Fecha o dropdown de usuário
  };

  return (
    <nav
      id="page-sidebar"
      className={
        `fixed start-0 top-0 bottom-0 z-50 flex h-full w-64 flex-col border-gray-200 bg-white transition-transform duration-300 ease-out lg:w-64 ltr:border-r rtl:border-l dark:border-gray-700/75 dark:bg-gray-900 ` +
        (!stateMenu.mobileSidebarOpen
          ? "ltr:-translate-x-full rtl:translate-x-full "
          : "translate-x-0 ") +
        (!stateMenu.isMenuOpen
          ? "lg:ltr:-translate-x-full lg:rtl:translate-x-full "
          : "lg:ltr:translate-x-0 lg:rtl:translate-x-0 ")
      }
      aria-label="Main Sidebar Navigation"
    >
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between px-5 shadow">
        {/* Brand */}
        <a
          href="#"
          className="group inline-flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-green-500 group-hover:scale-110"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span>SevenTube</span>
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="inline-flex items-center justify-center text-gray-800 dark:text-gray-200"
        >
          {!stateMenu.darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className="overflow-y-auto py-4">
        <ul className="space-y-1">
          {stateMenu.menus.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleClick(item.path)}
                className={`flex w-full items-center px-5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "border-r-4 border-green-400 bg-green-50 text-green-900 dark:bg-green-800 dark:text-white"
                    : "bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="flex justify-center items-center w-6 h-6">
                  <i
                    className={`fas ${item.icon} ${
                      location.pathname === item.path
                        ? "text-green-600 dark:text-green-300"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  />
                </span>
                <span className="ml-3">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
