import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import clsx from "clsx";
import { Camera } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const disabled = true;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setIsActive(count >= 2 ? true : false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-16 w-16 hover:scale-110 transition-transform duration-300"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-16 w-16 hover:scale-110 transition-transform duration-300"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-center">
        Vite + React + Tailwind v4
      </h1>

      <button
        onClick={toggleTheme}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Alternar para {theme === "light" ? "Modo Escuro" : "Modo Claro"}
      </button>

      <div className="bg-white/10 p-6 rounded-xl shadow-lg text-center w-full max-w-md">
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handleClick}
            className="btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
        <p className="text-sm text-gray-800 dark:text-gray-300 mt-4">
          Edit <code className="bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-800 px-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>

      <p className="mt-6">count is {count}</p>

      <p className="mt-6 text-sm text-gray-400">
        Click on the Vite and React logos to learn more
        <i className="fab fa-github text-2xl text-red-400 ml-4"></i>
      </p>

      <p
        className={clsx(
          "text-lg mt-4",
          isActive ? "text-green-500" : "text-red-500",
          !disabled && "opacity-50"
        )}
      >
        Exemplo com clsx
      </p>
    </div>
  );
}

export default App;
