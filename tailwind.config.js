/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        "bg-main": "#F8F9FB",
        "bg-light": "#FFFF",
        "bg-highlight": "#F6F9FD",
        "primary-blue": "#346CC4",
      }
    },
  },

  plugins: [
    require('preline/plugin'),
  ],
};