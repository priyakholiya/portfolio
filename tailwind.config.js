/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EC',
        coral: '#FF5C39',
        pinky: '#FFB3C6',
        yellowy: '#FFE066',
        lilac: '#C9B6F2',
        ink: '#1C1A17',
        charcoal: '#3A362F',
        borderink: '#141414',
        mint: '#A8E6B5',
      },
      fontFamily: {
        display: ['Caveat', 'cursive'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #1C1A17',
        'brutal-lg': '8px 8px 0px 0px #1C1A17',
        'brutal-sm': '2px 2px 0px 0px #1C1A17',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'slow-bounce': 'bounce 3s infinite',
        'wiggle-slow': 'wiggle 4s ease-in-out infinite',
        'wiggle-fast': 'wiggle 1.5s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
