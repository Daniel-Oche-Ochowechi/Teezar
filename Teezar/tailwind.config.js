export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        aglema: ["Aglema", "Cormorant Garamond", "Playfair Display", "serif"],
        raleway: ["Raleway", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#f7f3ec",
        softBeige: "#ece3d4",
        pearl: "#FAF8F5",
        ivory: "#F3EDE2",
        noir: "#0F0F11",
        charcoal: "#1C1C20",
        gold: {
          50: "#FCF9F0",
          100: "#F7F0DC",
          200: "#EFE1B8",
          300: "#E4CE8D",
          400: "#D9BC65",
          500: "#C5A245",
          600: "#AA8633",
          700: "#866627",
          800: "#694F23",
          900: "#4F3B1D",
        },
      },
      boxShadow: {
        premium: "0 20px 50px -12px rgba(15, 15, 17, 0.08)",
        "gold-glow": "0 10px 30px -5px rgba(197, 162, 69, 0.22)",
        "gold-glow-lg": "0 20px 40px -10px rgba(197, 162, 69, 0.35)",
        "card-hover": "0 22px 45px -10px rgba(15, 15, 17, 0.12)",
      },
      borderRadius: {
        extra: "24px",
      },
    },
  },
  plugins: [],
};
