"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Ensure localStorage is available and set the initial theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="h-14 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center px-4">
      <Link href="/">
        <div className="font-semibold text-lg text-gray-800 dark:text-gray-200">
          Bitlinks
        </div>
      </Link>
      <ul className="flex gap-4 items-center">
        <Link href="/">
          <li className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition">
            Home
          </li>
        </Link>
        <Link href="/shorten">
          <li className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition">
            Shorten
          </li>
        </Link>
        <Link href="https://github.com/vivekborkar17">
          <li className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition">
            GitHub
          </li>
        </Link>
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
