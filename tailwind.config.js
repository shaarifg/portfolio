/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '640px', // for mobile
        md: '768px', //for tablet 
        lg: '1024px', // for laptop
        xl: '1280px', // big screens
        // Add more screen sizes as needed
      },
      colors: {
        theme1: {
          primary: "#3498db",
          secondary: "#2ecc71",
        },
        theme2: {
          primary: "#e74c3c",
          secondary: "#f39c12",
        },
      },
    },
  },
  plugins: [],
};
