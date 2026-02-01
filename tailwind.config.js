/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary palette - neutral luxury (Four Seasons style)
          primary: "#1a1a1a",
          primaryHover: "#333333",
          accent: "#8b7355",
          accentLight: "#a89078",

          // Text hierarchy
          ink: "#1a1a1a",
          body: "#4a4a4a",
          muted: "#6b6b6b",
          subtle: "#999999",

          // Backgrounds
          white: "#ffffff",
          cream: "#faf9f7",
          linen: "#f5f4f0",

          // Borders
          border: "#e8e6e3",
          borderLight: "#f0efed",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
      },
      fontSize: {
        // Display sizes
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "0" }],

        // Heading sizes
        "heading-lg": ["1.5rem", { lineHeight: "1.3", letterSpacing: "0" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", letterSpacing: "0" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4", letterSpacing: "0" }],

        // Body sizes
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-md": ["1rem", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", letterSpacing: "0" }],

        // Caption/Label
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
        overline: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      boxShadow: {
        soft: "0 18px 48px -26px rgba(0,0,0,0.38)",
        subtle: "0 4px 20px -4px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "gradient-overlay":
          "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)",
        "gradient-dark":
          "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
      },
      animation: {
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        scrollDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "30%": { opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
