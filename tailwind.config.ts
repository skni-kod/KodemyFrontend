import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	colors: {},
	theme: {
		screens: {
			'2xs': '375px',
			xs: '530px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			boxShadow: {
				bottomShadow: '0px 6px 20px 2px rgba(107, 114, 128, 1)',
				greenShadow: '0px 0px 22px 1px rgba(72, 187, 120, 1)',
				redShadow: '0px 0px 22px 1px rgba(245, 101, 101, 1)',
				blueShadow: '0px 0px 22px 1px rgba(59, 130, 246, 1)',
				yellowShadow: '0px 0px 22px 1px rgba(236, 201, 75, 1)',
			},
			colors: {
				primary: 'rgb(var(--primary-color) / <alpha-value>)',
				primaryHover: 'rgb(var(--primary-hover-color) / <alpha-value>)',
				textOnPrimary: 'rgb(var(--text-on-primary-color) / <alpha-value>)',
				secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
				textOnSecondary: 'rgb(var(--text-on-secondary-color) / <alpha-value>)',
				bg: 'rgb(var(--background-color) / <alpha-value>)',
				bgHover: 'rgb(var(--background-hover-color) / <alpha-value>)',
				error: 'rgb(var(--error-color) / <alpha-value>)',
				grade: 'rgb(var(--grade) / <alpha-value>)',
				gray: 'rgb(var(--gray) / <alpha-value>)',
				grayText: 'rgb(var(--grayText) / <alpha-value>)',
				green: 'rgb(var(--green) / <alpha-value>)',
				greenText: 'rgb(var(--greenText) / <alpha-value>)',
			},
			height: {
				inherit: 'inherit',
				nav: '3.75rem',
				fullContent: 'calc(100vh - 3.5rem - 0.5rem - 0.5rem)',
				navMenu: '2.625rem',
				'13': '3.25rem',
			},
			inset: {
				nav: '3.75rem',
				navMenu: '2.625rem',
			},
			margin: {
				side: '4.5rem',
				expandSide: '16rem',
				nav: '3.75rem',
			},
			minHeight: {
				fullContent: 'calc(100vh - 3.75rem)',
			},
			maxWidth: {
				'2xs': '375px',
				xs: '530px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			maxHeight: {
				fullContent: 'calc(100vh - 3.5rem - 0.5rem - 0.5rem)',
			},
			padding: {
				'0.25': '0.0625rem',
				'1/2': '50%',
				'1/4': '25%',
				nav: '3.75rem',
			},
			width: {
				inherit: 'inherit',
				18: '4.5rem',
				22: '5.5rem',
				68: '17rem',
				104: '26rem',
				128: '32rem',
				side: '4.5rem',
				expandSide: '16rem',
			},
			zIndex: {
				5: '5',
				15: '15',
				25: '25',
				35: '35',
				45: '45',
			},
		},
	},
	plugins: [],
};
export default config;
