/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.js",
    "./app/**/*.jsx",
    "./app/**/*.ts",
    "./app/**/*.tsx",
    "./app/**/*.html",
    "./app/**/*.css",
    "./app/routes/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/root.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  important: true,
}