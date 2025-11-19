// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita dark mode con clase
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}", // Incluye archivos en la raíz del proyecto
  ],
  theme: {
    fontFamily: {
      'sans': ['Ubuntu', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-bg': '#020618',
        'dark-button': '#1D293D',
        'portada-bg': '#ffffff',
        'portada-bg-dark': '#020618',
        'menu-bg': '#f8f9fa',
        'menu-bg-dark': '#0a0f24',
      },
    },
  },
  plugins: [],
}