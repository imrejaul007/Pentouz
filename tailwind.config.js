/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary dark - unified for all dark backgrounds
          primary: "#0f0e0c",
          primaryHover: "#000000",

          // Accent hierarchy
          accent: "#8b7355",
          accentLight: "#a69584",
          accentMuted: "#6b5f4f",

          // Gold palette - primary luxury accent
          gold: "#c3a061",
          goldLight: "#d4b978",
          goldDark: "#a8874d",

          // Text on light backgrounds
          ink: "#1a1814",
          body: "#4a4a44",
          muted: "#6b6358",
          subtle: "#8b8278",

          // Light backgrounds - unified warm cream palette
          white: "#ffffff",
          cream: "#faf7f2",
          sand: "#f5f0e8",
          linen: "#f0ebe3",

          // Borders
          border: "#e5dfd6",
          borderLight: "#f0ebe3",

          // Dark section backgrounds
          dark: "#0f0e0c",
          darkSecondary: "#1a1814",
          darkAccent: "#252219",
        },
      },
      fontFamily: {
        // Body text - elegant serif for warmth and readability
        body: ["var(--font-body-family)", "Georgia", "Times New Roman", "serif"],
        // Display headlines - refined serif with dramatic weight contrast
        display: ["var(--font-display-family)", "Georgia", "Times New Roman", "serif"],
        // UI elements, labels, navigation - clean sans-serif
        ui: ["var(--font-ui-family)", "system-ui", "sans-serif"],
        // Legacy support
        sans: ["var(--font-body-family)", "Georgia", "serif"],
      },
      fontSize: {
        // Hero display - dramatic and impactful
        "display-hero": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "300" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em", fontWeight: "300" }],
        "display-lg": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-md": ["clamp(1.75rem, 3vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "300" }],
        "display-sm": ["clamp(1.5rem, 2vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "300" }],

        // Heading sizes
        "heading-xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.25", letterSpacing: "0" }],
        "heading-md": ["1.25rem", { lineHeight: "1.3", letterSpacing: "0" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.35", letterSpacing: "0" }],

        // Body sizes
        "body-xl": ["1.375rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.7", letterSpacing: "0.008em" }],
        "body-md": ["1rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.7", letterSpacing: "0.01em" }],

        // Labels & Captions - UI font
        label: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.12em", fontWeight: "500" }],
        caption: ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
        overline: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.2em", fontWeight: "500" }],
        micro: ["0.625rem", { lineHeight: "1.4", letterSpacing: "0.15em", fontWeight: "500" }],
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
        soft: "0 25px 60px -15px rgba(15, 14, 12, 0.12)",
        subtle: "0 4px 30px -5px rgba(15, 14, 12, 0.08)",
        card: "0 15px 50px -12px rgba(15, 14, 12, 0.1)",
        "card-hover": "0 20px 60px -10px rgba(15, 14, 12, 0.15)",
        glow: "0 0 40px rgba(195, 160, 97, 0.15)",
      },
      backgroundImage: {
        "gradient-overlay": "linear-gradient(to top, rgba(15,14,12,0.7), rgba(15,14,12,0.3) 50%, transparent)",
        "gradient-dark": "linear-gradient(to top, rgba(15,14,12,0.8), rgba(15,14,12,0.4) 60%, rgba(15,14,12,0.1))",
        "gradient-hero": "linear-gradient(to top, rgba(15,14,12,0.65), rgba(15,14,12,0.2) 50%, rgba(15,14,12,0.05))",
        "gradient-light": "linear-gradient(180deg, #faf7f2 0%, #f5f0e8 100%)",
      },
      transitionDuration: {
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      animation: {
        "scroll-down": "scrollDown 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-up": "fadeUp 1.2s ease-out forwards",
        "slow-pulse": "pulse 4s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
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
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
