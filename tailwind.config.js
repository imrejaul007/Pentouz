/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Four Seasons inspired - ultra minimal luxury
          primary: "#1a1a1a",
          primaryHover: "#000000",
          accent: "#9a8a78",
          accentLight: "#b5a594",

          // Text hierarchy - softer contrasts
          ink: "#1a1a1a",
          body: "#555555",
          muted: "#777777",
          subtle: "#aaaaaa",

          // Backgrounds - warm whites
          white: "#ffffff",
          cream: "#fafaf8",
          linen: "#f7f6f4",
          sand: "#f2f1ef",

          // Borders - barely visible
          border: "#eaeae8",
          borderLight: "#f5f5f3",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        // Display sizes - larger, more impactful
        "display-hero": ["5.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],

        // Heading sizes
        "heading-xl": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", letterSpacing: "0" }],
        "heading-md": ["1.25rem", { lineHeight: "1.35", letterSpacing: "0" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4", letterSpacing: "0" }],

        // Body sizes - refined
        "body-xl": ["1.25rem", { lineHeight: "1.75", letterSpacing: "0" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "0.005em" }],
        "body-md": ["1rem", { lineHeight: "1.7", letterSpacing: "0.01em" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.65", letterSpacing: "0.01em" }],

        // Labels & Captions - elegant
        label: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.06em" }],
        overline: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.2em" }],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
      spacing: {
        "section-xs": "3rem",
        "section-sm": "5rem",
        "section-md": "7rem",
        "section-lg": "10rem",
        "section-xl": "14rem",
      },
      maxWidth: {
        "container-sm": "640px",
        "container-md": "960px",
        "container-lg": "1200px",
        "container-xl": "1440px",
        "container-2xl": "1600px",
      },
      boxShadow: {
        soft: "0 20px 50px -15px rgba(0,0,0,0.15)",
        subtle: "0 4px 30px -5px rgba(0,0,0,0.08)",
        card: "0 10px 40px -10px rgba(0,0,0,0.12)",
      },
      backgroundImage: {
        "gradient-overlay": "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.15), transparent)",
        "gradient-dark": "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)",
        "gradient-hero": "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.05))",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      animation: {
        "scroll-down": "scrollDown 2.5s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        scrollDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
