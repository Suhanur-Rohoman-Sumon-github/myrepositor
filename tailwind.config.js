/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#9867FF", // Navy Blue
        brandSecondary: "#F5F5F5", // Light Gray
        brandAccent: "#00ADEF", // Bright Cyan
        brandHighlight: "#FF6A00", // Orange
        brandText: "#333333", // Dark Gray (for text)
      },
      fontFamily: {
        headingFont: "Sora",
      },
    },
  },
  plugins: [daisyui],
};
