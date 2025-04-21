import { useEffect, useState } from "react";

export function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const menus = [
    { label: "Home", icon: "fa-chart-pie", path: "/", tipo: "link" },
    { label: "About", icon: "fa-balance-scale", path: "/About", tipo: "link" },
  ];

  const isMenuOpenComputed = isMenuOpen;

  const toggleMenu = (menuKey) => {
    if (menuKey === "isMenuOpen") setIsMenuOpen((prev) => !prev);
    else if (menuKey === "mobileSidebarOpen") setMobileSidebarOpen((prev) => !prev);
    else if (menuKey === "userDropdownOpen") setUserDropdownOpen((prev) => !prev);
  };

  const closeMenu = (menuKey) => {
    if (menuKey === "isMenuOpen") setIsMenuOpen(false);
    else if (menuKey === "mobileSidebarOpen") setMobileSidebarOpen(false);
    else if (menuKey === "userDropdownOpen") setUserDropdownOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  // ✅ Aplica a classe dark no body ao carregar
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

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
