import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			texto1: '#FFFEFE',
  			nombre1: '#663333',
  			bg1: '#F9F8F5',
  			components1: '#A1887F',
  			texto2: '#181818',
  			nombre2: '#98465f',
  			bg2: '#222426',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
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
  			'1000px': '1000px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('daisyui'), [nextui()], require("tailwindcss-animate")],
};
export default config;
