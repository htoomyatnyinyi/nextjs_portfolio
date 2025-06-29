// "use client";

// import { useState, useEffect } from "react";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     document.body.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//       aria-label="Toggle theme"
//     >
//       {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }
