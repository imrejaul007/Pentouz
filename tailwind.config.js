/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Ultra minimal luxury palette
          primary: "#0a0a0a",
          primaryHover: "#000000",
          accent: "#8a7968",
          accentLight: "#a69484",
          gold: "#c9a962",
          goldLight: "#d4b978",

          // Text hierarchy
          ink: "#0a0a0a",
          body: "#4a4a4a",
          muted: "#6a6a6a",
          subtle: "#999999",

          // Backgrounds - pure whites and warm creams
          white: "#ffffff",
          cream: "#faf9f7",
          linen: "#f5f4f2",
          sand: "#f0efed",

          // Borders - very subtle
          border: "#e5e4e2",
          borderLight: "#f0efed",
        },
      },
      fontFamily: {
        sans: ["var(--font-body-family)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-display-family)", "Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        // Display sizes - dramatic and impactful
        "display-hero": ["7rem", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "300" }],
        "display-xl": ["5.5rem", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "300" }],
        "display-lg": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "300" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "300" }],

        // Heading sizes
        "heading-xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.25", letterSpacing: "0" }],
        "heading-md": ["1.25rem", { lineHeight: "1.3", letterSpacing: "0" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.35", letterSpacing: "0" }],

        // Body sizes
        "body-xl": ["1.375rem", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.7", letterSpacing: "0.005em" }],
        "body-md": ["1rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.7", letterSpacing: "0.01em" }],

        // Labels & Captions
        label: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
        caption: ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
        overline: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.25em" }],
        micro: ["0.625rem", { lineHeight: "1.4", letterSpacing: "0.2em" }],
      },
      spacing: {
        "section-xs": "4rem",
        "section-sm": "6rem",
        "section-md": "8rem",
        "section-lg": "12rem",
        "section-xl": "16rem",
      },
      maxWidth: {
        "container-sm": "640px",
        "container-md": "960px",
        "container-lg": "1200px",
        "container-xl": "1440px",
        "container-2xl": "1680px",
      },
      boxShadow: {
        soft: "0 25px 60px -15px rgba(0,0,0,0.12)",
        subtle: "0 4px 30px -5px rgba(0,0,0,0.06)",
        card: "0 15px 50px -12px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "gradient-overlay": "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2) 50%, transparent)",
        "gradient-dark": "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1))",
        "gradient-hero": "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05))",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1000: "1000ms",
        1200: "1200ms",
      },
      animation: {
        "scroll-down": "scrollDown 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-up": "fadeUp 1.2s ease-out forwards",
        "slow-pulse": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        scrollDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
