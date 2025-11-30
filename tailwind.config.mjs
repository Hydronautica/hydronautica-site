/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f3ff",
          100: "#bfdfff",
          200: "#8fc7ff",
          300: "#57a7ff",
          400: "#2f8fff",
          500: "#0f73ff",
          600: "#0057db",
          700: "#0043aa",
          800: "#00327c",
          900: "#002456"
        }
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184,0.22) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
