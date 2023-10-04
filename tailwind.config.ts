import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'2sm': '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
	extend: {
		'light-theme': {
			'bg-body-color-light': {
				backgroundColor: 'var(--body-color-light)',
			},
			'bg-body-2-color-light': {
				color: 'var(--body-2-color-light)',
			},
			'bg-text-color-light': {
				color: 'var(--text-color-light)',
			},
		},
		'dark-theme': {
			'bg-body-color-dark': {
				backgroundColor: 'var(--body-color-dark)',
			},
			'bg-body-2-color-dark': {
				color: 'var(--body-2-color-dark)',
			},
			'bg-text-color-dark': {
				color: 'var(--text-color-dark)',
			},
		},
	},
};
export default config;
