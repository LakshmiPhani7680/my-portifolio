/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        skillProgress: {
          '0%': { width: '0%' },
          '20%': { width: '0%' },
          '100%': { width: 'var(--progress)' }
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        skillProgress: 'skillProgress 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        shine: 'shine 1.5s infinite',
        bounce: 'bounce 1s infinite'
      }
    },
  },
  plugins: [],
}

