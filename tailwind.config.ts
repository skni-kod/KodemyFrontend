import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
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
			colors: {
				primary: 'rgb(var(--primary-color) / <alpha-value>)',
				text2primary: 'rgb(var(--text2primary-color) / <alpha-value>)',
				overlay2primary: 'rgb(var(--overlay2primary-color) / <alpha-value>)',
				secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
				text2secondary: 'rgb(var(--text2secondary-color) / <alpha-value>)',
				bg: 'rgb(var(--background-color) / <alpha-value>)',
				text2bg: 'rgb(var(--text2background-color) / <alpha-value>)',
				overlay2bg: 'rgb(var(--overlay2background-color) / <alpha-value>)',
				placeholder2bg: 'rgb(var(--placeholder2background-color) / <alpha-value>)',
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
			width: {
				inherit: 'inherit',
				18: '4.5rem',
				22: '5.5rem',
			},
			height: {
				inherit: 'inherit',
			},
			padding: {
				'1/2': '50%',
				'1/4': '25%',
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
