/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#c3a061",
          accent: "#8b7355",
          dark: "#0f0e0c",
          ink: "#1a1814",
          body: "#4a4a44",
          muted: "#6b6358",
          cream: "#faf7f2",
          sand: "#f5f0e8",
          border: "#e5dfd6",
        },
      },
      fontFamily: {
        body: ["'Lora'", "Georgia", "serif"],
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        ui: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};
