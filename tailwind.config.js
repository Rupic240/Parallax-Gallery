/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bouncing': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-28px)',
          },
          '100%': {
            transform: 'translateY(0)',
          }
        },
        'fade_out': {
          to: {
            opacity: 0
          }
        },
        'fade_in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        'tranX_in': {
          from: { transform: 'translateX(350px)'},
          to: { transform: 'translateX(0)'}
        },
        'tranX_out': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(1000px)'}
        },
      },
      animation: {
        'bouncing': 'bouncing 2.5s linear infinite',
        'fade_out': 'fade_out .5s ease forwards',
        'fade_in': 'fade_in .5s ease forwards',
        'tranX_in': 'tranX_in .5s ease forwards',
        'tranX_out': 'tranX_out .5s ease forwards'
      },
    },
  },
  plugins: [],
}