/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myfont': ['Poppins', '"Noto Sans Thai"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

