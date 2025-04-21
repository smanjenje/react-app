import React from "react";
import { useMenu } from "./hooks/useMenu";

function App() {
  const { stateMenu, toggleMenu, toggleDarkMode } = useMenu();

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
                  <a href={menu.path} className="text-blue-400">
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
