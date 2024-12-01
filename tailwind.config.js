/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary_pinky: "#FF2E63",
        primary_pinkdust: "#FC5185",
        primary_blusky: "#08C2FF",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1230px",
      },
      animation: {
        'wave': 'wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%'  :{ transform: 'rotate(0deg)'},
          '10%' :{ transform: 'rotate(14deg)'},
          '20%' :{ transform: 'rotate(-8deg)'},
          '30%' :{ transform: 'rotate(14deg)'},
          '40%' :{ transform: 'rotate(-4deg)'},
          '50%' :{ transform: 'rotate(10deg)'},
          '60%' :{ transform: 'rotate(0deg)' },
          to    :{ transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
