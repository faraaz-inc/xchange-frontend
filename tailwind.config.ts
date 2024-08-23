import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accentGreen": "rgb(0, 194, 120)",
        "accentGreenBg": "rgba(0, 194, 120, 0.16)",
        "accentBlue": "rgb(76 148 255)",
        "accentBlueBg": "rgba(76, 148, 255, 0.16)"
      }
    },
  },
  plugins: [],
};
export default config;
