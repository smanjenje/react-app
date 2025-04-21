import { useState, useRef } from "react";
import { useMenu } from "../../hooks/MenuProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const {
    isMenuOpen,
    toggleMenu, // importante garantir que está desestruturando também!
  } = useMenu();

  const [user] = useState({ nome: "Usuário" }); // simulação de usuário autenticado
  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropdownRefs = useRef({});

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Sair = () => {
    console.log("Logout");
    navigate("/");
  };

  const menuItem =
    "flex w-full items-center rounded-sm px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100";

  return (
    <header
      id="page-header"
      className={`fixed start-0 end-0 top-0 z-30 flex h-16 flex-none items-center bg-white shadow-xs transition-all duration-300 ease-out dark:bg-gray-900 ${
        isMenuOpen ? "lg:ps-64" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl justify-between px-4 lg:px-2">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Toggle Sidebar on Mobile */}
          <div className="me-2 lg:hidden">
            <button
              type="button"
              onClick={() => toggleMenu("mobileSidebarOpen")}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white px-3 py-2 leading-6 font-semibold text-gray-900 shadow-xs hover:border-gray-300 hover:bg-gray-200 hover:text-gray-900 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              <i className="fas fa-bars" />
            </button>
          </div>

          {/* Toggle Sidebar on Desktop */}
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => toggleMenu("isMenuOpen")}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white px-3 py-2 leading-6 font-semibold text-gray-900 shadow-xs hover:border-gray-300 hover:bg-gray-200 hover:text-gray-900 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* User Dropdown */}
          <div
            className="relative inline-block"
            ref={(el) => (dropdownRefs.current["User1"] = el)}
          >
            <button
              type="button"
              onClick={() => toggleDropdown("User1")}
              className="inline-flex items-center justify-center bg-transparent px-3 py-2 text-sm leading-5 font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900 hover:shadow-sm dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <i className="fas fa-user-circle sm:hidden text-lg" />
              <span className="hidden sm:inline">{user.nome}</span>
              <i className="fas fa-chevron-down ms-1 hidden size-5 opacity-50 sm:inline-block" />
            </button>

            {openDropdowns["User1"] && (
              <div className="absolute end-0 z-50 mt-5 w-48 rounded-sm shadow-xl bg-white dark:bg-gray-900">
                <div className="relative divide-y divide-gray-100 dark:divide-gray-700 z-50">
                  <div className="space-y-1">
                    <button className={menuItem}>Perfil</button>
                  </div>
                  <div className="space-y-1">
                    <button onClick={Sair} className={menuItem}>
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
