/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'SkillsImg': "url('https://th.bing.com/th/id/OIP.rKccqifhkTib8FMsBxK4gwHaEv?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')",
      }
    },
  },
  plugins: [],
}