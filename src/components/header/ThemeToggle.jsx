import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300 focus:outline-none"
    >
      <div
        className={`w-6 h-6 rounded-full bg-white dark:bg-yellow-400 shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        <span className="absolute top-1 left-1 text-xs">
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
