/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "bg-main": "#F8F9FB",
        "bg-light": "#FFFFFF",
        "bg-highlight": "#F6F9FD",
        "primary-blue": "#346CC4",
        "gray-80": "#808080",
        "light-text": "#808080",
        "dark-text": "#3C3C3C",
        "divider-clr": "#E6E6E6",
        "heading-clr": '#15223C',

        //dark-mode
        "primary-bg-dark": '#121212',
        "secondary-bg-dark": '#1f1f1f',
        "heading-text-dark": '#FFFFFFDE',
        "secondary-text-dark": '#FFFFFF99'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwind-scrollbar')
  ],
};
