import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/tailwindcss.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [navItems, setNavItems] = useState(["About", "Portfolio", "Contact"]);

  useEffect(() => {
    // On mount, check if dark mode should be enabled
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      // We're switching TO dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      // We're switching FROM dark mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-sm dark:bg-[#111827]/5 border-b border-gray-200 dark:border-gray-700">
        <div className="container">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 hover:text-gray-900 dark:hover:bg-gray-700/50 dark:hover:text-white transition-all duration-300"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <svg
                  className="block size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="Logo"
                  onClick={() => setIsMenuOpen(false)}
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex sm:gap-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) => `
                  relative font-semibold text-sm
                  ${
                    isActive
                      ? "text-gray-900 dark:text-white after:w-full"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full"
                  }
                  transition-colors duration-300
                  after:content-[''] after:absolute after:-bottom-1 after:left-0
                  after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400
                  after:transition-all after:duration-300
                `}
                >
                  {item}
                </NavLink>
              ))}
            </div>

            {/* Dark Mode Button */}
            <div>
              <button
                onClick={toggleDarkMode}
                type="button"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 hover:text-gray-900 dark:hover:bg-gray-700/50 dark:hover:text-white transition-all duration-300 focus:outline-none rounded-lg text-sm p-2.5"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  // Sun icon
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  // Moon icon
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden border-t border-gray-200 dark:border-gray-700`}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => `
                block rounded-lg px-3 py-2 text-base font-semibold
                ${
                  isActive
                    ? "bg-gray-200/50 dark:bg-gray-700/50 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                }
                transition-all duration-300
              `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
