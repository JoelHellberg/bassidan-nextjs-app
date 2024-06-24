import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'teko': ['teko', 'sans-serif'],
        'futura': ['futura-pt', 'sans-serif'],
        'modesto': ['proxima-nova', 'sans-serif'],
        'sans': ['proxima-nova', ...defaultTheme.fontFamily.sans] // TODO: Override mobile default font
      },
      colors: {
        background: '#FFF1DA',
        backgroundShaded: '#E2D9C7',
        blackText: '#030302',
        whiteText: '#E3E3E3',
        footer: '#2D2D2D',
        customGreen: '#528e62',
        customYellow: '#e9b86b',
        customBlue: '#a4c9cb',
        darkPurple: "#5A55A4",
        orange: "#FCC290",
        darkOrange: "#F7944E",
        lobster: "#DEAB9E",
        darkLobster: "#C46E6E",
        lightWhite1: '#F4F2ED',
        lightWhite2: '#DEDAD3',
        pearl: "#FBFCF8",
      },
    },
    screens: {
      handheld: { 'max': '1024px' },
      mobile: { 'max': '750px' },
      thin: { 'max': '340px' }
    },
  },
  plugins: [],
};
export default config;
