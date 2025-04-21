import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom"; // Corrigido: importando useLocation
import { useMenu } from "./hooks/useMenu"; // Importe o hook personalizado

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const { stateMenu, toggleMenu, toggleDarkMode } = useMenu();
  const location = useLocation(); // Usando useLocation para pegar o pathname atual

  return (
    <div className={stateMenu.darkMode ? "dark" : ""}>
      <div className="bg-gray-800 text-white p-4">
        <button onClick={() => toggleMenu("isMenuOpen")}>
          {stateMenu.isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        </button>
        <button onClick={toggleDarkMode}>
          {stateMenu.darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>

        {stateMenu.isMenuOpen && (
          <div className="mt-4">
            <ul>
              {stateMenu.menus.map((menu) => (
                <li key={menu.label}>
                  <Link
                    to={menu.path}
                    className={location.pathname === menu.path ? "text-green-400" : ""}
                  >
                    {menu.label}
                    <i className={`fas px-4 py-2 rounded ${menu.icon}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr className="my-4" />

        {/* Defina as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
