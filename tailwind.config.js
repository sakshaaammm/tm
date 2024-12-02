/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#9155FD',
          500: '#7367F0',
        },
      },
    },
  },
  plugins: [],
};