/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-blue': '#2f3c44', // Charcoal Blue
        'slate-gray': '#2f3c44', // Slate Gray (same hex code)
      },
    },
  },
  plugins: [],
}