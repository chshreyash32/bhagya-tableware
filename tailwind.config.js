/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#244C36',
          dark: '#183D2B',
          light: '#2d5e43',
        },
        leaf: {
          DEFAULT: '#668B52',
          light: '#85a870',
          dark: '#4f6d3f',
          olive: '#5e770d',
          tint: '#eaf2e7',
        },
        cream: {
          DEFAULT: '#FAF8F0',
          warm: '#F7F4E9',
          dark: '#EDE2CC',
        },
        beige: {
          DEFAULT: '#EDE2CC',
          light: '#F4EDE0',
        },
        earth: {
          DEFAULT: '#896443',
          dark: '#6B4E33',
          light: '#A47D5A',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px rgba(36, 76, 54, 0.08)',
        'float': '0 8px 30px rgba(24, 61, 43, 0.16)',
      },
    },
  },
  plugins: [],
}
