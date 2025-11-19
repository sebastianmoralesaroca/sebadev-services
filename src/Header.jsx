import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-900 transition-colors">

      {/* Header Content */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Back Button */}
        <button className="w-12 h-12 rounded-full bg-gray-200 dark:bg-zinc-800/80 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-zinc-700/90 transition-colors">
          <svg
            className="w-6 h-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Username */}
        <h1 className="text-black dark:text-white text-xl font-semibold tracking-tight">
          sebadev
        </h1>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full bg-gray-200 dark:bg-zinc-800/80 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-zinc-700/90 transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            // Sol - Modo claro
            <svg
              className="w-6 h-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            // Luna - Modo oscuro
            <svg
              className="w-6 h-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;