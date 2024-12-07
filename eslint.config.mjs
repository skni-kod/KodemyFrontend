import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			'**/node_modules/',
			'**/.next/',
			'**/.git/',
			'**/.github/',
			'**/docker-compose.yml',
			'**/Dockerfile',
			'**/README.md',
			'**/.env*',
			'**/dist',
			'**/build',
		],
	},
	...compat.extends('next/core-web-vitals', 'plugin:prettier/recommended', 'next', 'prettier'),
	{
		plugins: {
			prettier,
			tailwindcss,
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports,
		},

		rules: {
			'prettier/prettier': [
				'error',
				{
					printWidth: 120,
					useTabs: true,
					singleQuote: true,
					tabWidth: 2,
					endOfLine: 'auto',
				},
			],

			'tailwindcss/no-custom-classname': [
				'error',
				{
					validateColors: true,
					configPath: './tailwind.config.js',

					ignore: [
						'^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$',
						'^text-(thin|light|normal|medium|semibold|bold|extrabold|black)$',
						'^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$',
						'^shadow-(sm|md|lg|xl|2xl|inner|outline|none)$',
						'^bg-(auto|cover|contain|fixed|local|scroll|top|center|bottom|left|right|clip|border|padding|content)$',
						'^text-(left|center|right|justify|start|end)$',
						'^border-(solid|dashed|dotted|double|none)$',
						'^ring-(0|1|2|4|8|inset|transparent|current|white|black|gray|red|green|blue|indigo|yellow|pink)$',
						'^opacity-(0|5|10|25|50|75|90|100)$',
						'^hover:(.*)$',
						'^focus:(.*)$',
					],
				},
			],

			'no-restricted-syntax': [
				'error',
				{
					selector:
						'Literal[value=/\\b(bg|text|border|from|to)-(red|blue|green|yellow|gray|purple|pink|indigo|cyan|teal|emerald|amber|lime)-\\d{3,}/]',
					message: 'Nie używaj wbudowanych kolorów Tailwind. Użyj zdefiniowanych w tailwind.config.js.',
				},
			],

			'simple-import-sort/imports': [
				'error',
				{
					groups: [['^react', '^@?\\w'], ['^\\u0000'], ['^@?\\w'], ['^\\.']],
				},
			],

			'unused-imports/no-unused-imports': 'error',

			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					ignoreRestSiblings: true,
				},
			],
		},
	},
];
