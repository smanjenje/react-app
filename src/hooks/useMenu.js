import { useState } from "react";

export function useMenu() {
  // Estado inicial do menu
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica o localStorage para definir o modo escuro
    return localStorage.getItem('darkMode') === 'true' || false;
  });
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const menus = [
    { label: "Home", icon: "fa-chart-pie", path: "/", tipo: "link" },
    { label: "About", icon: "fa-balance-scale", path: "/About", tipo: "link" },

  ];

  // Computado - Verifica se o menu está aberto
  const isMenuOpenComputed = isMenuOpen;

  // Alternar estado de qualquer menu
  const toggleMenu = (menuKey) => {
    if (menuKey === "isMenuOpen") {
      setIsMenuOpen((prev) => !prev);
    } else if (menuKey === "mobileSidebarOpen") {
      setMobileSidebarOpen((prev) => !prev);
    } else if (menuKey === "userDropdownOpen") {
      setUserDropdownOpen((prev) => !prev);
    }
  };

  // Fechar qualquer menu
  const closeMenu = (menuKey) => {
    if (menuKey === "isMenuOpen") {
      setIsMenuOpen(false);
    } else if (menuKey === "mobileSidebarOpen") {
      setMobileSidebarOpen(false);
    } else if (menuKey === "userDropdownOpen") {
      setUserDropdownOpen(false);
    }
  };

  // Alternar modo escuro
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return {
    stateMenu: {
      isMenuOpen,
      mobileSidebarOpen,
      darkMode,
      userDropdownOpen,
      menus,
    },
    isMenuOpenComputed,
    toggleMenu,
    closeMenu,
    toggleDarkMode,
  };
}
