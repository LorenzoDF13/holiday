import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=winter]"],
          primary: "#1d4ed8",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#1d4ed8",
        },
      },
      ,
    ],
  },
};
export default config;
