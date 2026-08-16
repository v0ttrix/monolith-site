import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#181919",
        "brand-light": "#2d2d2d",
        accent: "#974730",
        "accent-bright": "#fe987c",
        "accent-pale": "#ffdbd1",
        bone: "#fdf9f6",
        charcoal: "#1c1b1a",
        slate: "#444748",
        muted: "#747878",
        "muted-light": "#c4c7c7",
        warm: "#372b1e",
        "warm-light": "#f4dfcc",
        sand: "#f1edea",
        "sand-dark": "#ebe7e4",
        "sand-light": "#f7f3f0",
      },
      fontFamily: {
        display: ["Bodoni Moda", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "heading-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "heading-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        label: ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
