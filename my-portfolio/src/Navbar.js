import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-200 dark:bg-gray-950 border-b border-neonBlue px-6 py-4 shadow-md flex items-center justify-between fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold text-neonBlue drop-shadow-neon">
        MyPortfolio
      </h1>

      <ul className="hidden md:flex space-x-6 font-medium">
        {["home", "about", "projects", "contact"].map((section) => (
          <li key={section}>
            <a href={`#${section}`} className="hover:text-neonBlue transition capitalize">
              {section}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4 md:space-x-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl hover:text-neonBlue transition"
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          onClick={toggleMenu}
          className="md:hidden text-xl hover:text-neonBlue transition"
          aria-label="Toggle navigation menu"
          title="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-200 dark:bg-gray-950 flex flex-col items-center space-y-4 py-4 shadow-md md:hidden z-40 font-medium">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={toggleMenu}
                className="hover:text-neonBlue transition capitalize"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;


