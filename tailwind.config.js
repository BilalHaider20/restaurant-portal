/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode:'class',
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};