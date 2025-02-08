/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(255, 255, 255, 0.5)', // Small whitish shadow
        DEFAULT: '2px 2px 4px rgba(255, 255, 255, 0.5)', // Default whitish shadow
        lg: '3px 3px 6px rgba(255, 255, 255, 0.5)', // Large whitish shadow
        xl: '4px 4px 30px rgba(255, 255, 255, 1)'
      },
    },
  },
  plugins: [  function ({ addUtilities }) {
    const newUtilities = {
      '.text-glow-sm': {
        textShadow: '1px 1px 5px rgba(255, 255, 255, 0.7)',  // Subtle small glow
      },
      '.text-glow': {
        textShadow: '2px 2px 10px rgba(255, 255, 255, 0.8)',  // Medium glow
      },
      '.text-glow-lg': {
        textShadow: '3px 3px 20px rgba(255, 255, 255, 0.9)',  // Strong large glow
      },
      '.text-glow-xl': {
        textShadow: '4px 4px 30px rgba(255, 255, 255, 1)',  // Intense large glow
      },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
}
// tailwind.config.js
