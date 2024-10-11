/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': 'rgb(253, 76, 130)',
        "customGreen": 'rgb(145, 194, 53)',
      },
    },
  },
  plugins: [],
}

