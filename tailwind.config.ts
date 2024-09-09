import { nextui } from "@nextui-org/theme";
import { Config } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#02101E",
        "secondary-blue": "#003366",
        "tertiary-blue": "#4A90E2",
        "base-blue": "#006FEE",
        navbar: "#02101E",
        gray: {
          400: "#C1C1C1",
          800: "#02101ED1",
        },
      },
      fontFamily: {
        lato: ["Lato"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {},
      themes: {
        light: {
          colors: {
            background: "white",
            primary: {
              50: "#def3ff",
              100: "#b0d9ff",
              200: "#80bfff",
              300: "#50a6fe",
              400: "#258cfc",
              500: "#1373e4",
              600: "#0859b2",
              700: "#004080",
              800: "#00264f",
              900: "#000e1f",
              DEFAULT: "#003366",
            },
            secondary: {
              50: "#e3fcef",
              100: "#c2edd8",
              200: "#9edfbf",
              300: "#79d2a6",
              400: "#55c68d",
              500: "#3bac74",
              600: "#2d8659",
              700: "#1e6040",
              800: "#0d3a25",
              900: "#001509",
              DEFAULT: "#66CC99",
            },
          },
        },
        dark: {
          colors: {
            background: "#02101E",
          },
        },
      },
    }),
  ],
};

export default config;
