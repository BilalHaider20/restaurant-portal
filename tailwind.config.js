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
        "light-text": "#808080",
        "dark-text": "#3C3C3C",
        "divider-clr":"#E6E6E6"
      }
    },
  },

  plugins: [
    require('preline/plugin'),
  ],
};