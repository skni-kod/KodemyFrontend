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
				white2white: 'rgb(var(--color-white2white) / <alpha-value>)',
				white2darkgrey: 'rgb(var(--color-white2darkgrey) / <alpha-value>)',
				white2verydarkgrey: 'rgb(var(--color-white2verydarkgrey) / <alpha-value>)',
				grey2white: 'rgb(var(--color-grey2white) / <alpha-value>)',
				black2white: 'rgb(var(--color-black2white) / <alpha-value>)',
				black2grey: 'rgb(var(--color-black2grey) / <alpha-value>)',
				sky2002sky600: 'rgb(var(--color-sky2002sky600) / <alpha-value>)',
				sky6002sky200: 'rgb(var(--color-sky6002sky200) / <alpha-value>)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			transitionProperty: {
				width: 'width',
			},
			spacing: {
				'112': '28rem',
				'128': '32rem',
			},
			minHeight: {
				'96': '24rem',
				'112': '28rem',
			},
		},
	},
	plugins: [],
};
export default config;
