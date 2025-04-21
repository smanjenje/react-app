import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";  // Garantindo que sempre seja um booleano
  });

  const menus = [
    { label: "Home", icon: "fa-chart-pie", path: "/", tipo: "link" },
    { label: "About", icon: "fa-balance-scale", path: "/About", tipo: "link" },
  ];

  const toggleMenu = (key) => {
    switch (key) {
      case "isMenuOpen":
        setIsMenuOpen(prev => !prev);
        break;
      case "mobileSidebarOpen":
        setMobileSidebarOpen(prev => !prev);
        break;
      case "userDropdownOpen":
        setUserDropdownOpen(prev => !prev);
        break;
      default:
        break;
    }
  };

  const closeMenu = (key) => {
    switch (key) {
      case "isMenuOpen":
        setIsMenuOpen(false);
        break;
      case "mobileSidebarOpen":
        setMobileSidebarOpen(false);
        break;
      case "userDropdownOpen":
        setUserDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        mobileSidebarOpen,
        userDropdownOpen,
        darkMode,
        menus,
        toggleMenu,
        closeMenu,
        toggleDarkMode,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
