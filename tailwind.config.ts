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
			colors: {
				body: 'rgb(var(--color-background) / <alpha-value>)',
				texttt: 'rgb(var(--color-text) / <alpha-value>)',
				dark2grey: 'rgb(var(--color-text2) / <alpha-value>)',
				blueeee: 'rgb(var(--color-blue) / <alpha-value>)',
				darkblueeee: 'rgb(var(--color-dark-blue) / <alpha-value>)',
				icon: 'rgb(var(--color-icon) / <alpha-value>)',
				black2white: 'rgb(var(--color-black2white) / <alpha-value>)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
