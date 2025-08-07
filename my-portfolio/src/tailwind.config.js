module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",     // dark blue background
        textPrimary: "#E0E7FF",    // light text
        textSecondary: "#94A3B8",  // grayish secondary text
        primary: "#6366F1",        // indigo for accents and buttons
        "primary-dark": "#4F46E5", // darker indigo hover
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
