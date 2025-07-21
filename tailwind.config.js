/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#2a0f0d", // Warm dark brown (matches avatar bg)
        accent: "#f97316",     // Tailwind's orange-500 as accent
        cyan: "#00ffff",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, #3c1c0f, #4b1f0f, #2a0f0d)', // Custom gradient
      },
    },
  },
  plugins: [],
};
