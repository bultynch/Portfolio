import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'texto1': '#FFFEFE',
        'texto2': '#181818',
        'nombre1': '#663333',
        'bg1': '#F9F8F5',
        'components1': '#A1887F',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '800px': '800px',
        '900px': '900px',
        '850px': '850px',
        '1000px': '1000px',
      },
      
    },
  },
  plugins: [
    require('daisyui'), [nextui()],
    
  ],
};
export default config;
