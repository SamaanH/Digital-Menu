/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#393939',
        'ocean-white': '#f3f1ef'
      },
      borderWidth :{
        'border-1': '1px'
      }
    },
  },
  plugins: [],
}

