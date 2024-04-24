/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eng': ['Poppins', 'sans-serif'],
        'thai': ['"Noto Sans Thai"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

