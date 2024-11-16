/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ease-in-page': 'ease-in-page 0.5s ease-in forwards'
      },
      keyframes: {
        'ease-in-page': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      fontFamily: {
        custom: ['RedDead', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

