import {
  color,
  backgroundColor,
  backgroundImage,
  boxShadow,
  safelist,
  fontSize,
  fontFamily,
  borderColor,
  keyframes,
  animation,
  screens,
} from "./src/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: color,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      backgroundImage: backgroundImage,
      boxShadow: boxShadow,
      fontSize: fontSize,
      fontFamily: fontFamily,
      keyframes: keyframes,
      animation: animation,
      screens: screens,
    },
  },
  safelist: safelist,
};
