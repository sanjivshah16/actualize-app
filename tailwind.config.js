/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base colors
        background: '#EDE8E0',       // Darker cream (15% darker)
        surface: '#FFFFFF',          // White for cards
        border: '#000000',           // Black for outer/large box borders
        'border-inner': '#999999',   // 60% gray for inner boxes and pills

        // Primary palette - Dusk/Twilight theme
        primary: '#355070',          // Dusk Blue
        'primary-dark': '#2A4059',   // Darker dusk blue
        lavender: '#6d597a',         // Dusty Lavender
        rosewood: '#b56576',         // Rosewood
        coral: '#e56b6f',            // Light Coral
        bronze: '#eaac8b',           // Light Bronze

        // Text colors
        'text-primary': '#2D2D2D',   // Dark gray
        'text-secondary': '#6B6B6B', // Medium gray

        // Semantic colors
        success: '#355070',          // Using dusk blue for success
        error: '#e56b6f',            // Using light coral for error
      },
      fontFamily: {
        display: ['Tourney', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
