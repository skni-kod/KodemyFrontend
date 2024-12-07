import type { StaticImageData } from 'next/image';

import DarkDefault from '@/assets/settings/appearance/darkDefault/darkDefault.webp';
import DarkDefaultButton from '@/assets/settings/appearance/darkDefault/darkDefaultButton.webp';
import DarkDimmed from '@/assets/settings/appearance/darkDimmed/darkDimmed.webp';
import DarkDimmedButton from '@/assets/settings/appearance/darkDimmed/darkDimmedButton.webp';
import LightDefault from '@/assets/settings/appearance/lightDefault/lightDefault.webp';
import LightDefaultButton from '@/assets/settings/appearance/lightDefault/lightDefaultButton.webp';

export type ThemeOption = {
	id: string;
	label: string;
	iconType: IconType;
	imageSrc: StaticImageData;
	buttonImageSrc: StaticImageData;
};

export type IconType = 'light' | 'dark';

export type SystemColorMode = 'system' | 'single';

export const defaultTheme = {
	colorMode: 'single' as SystemColorMode,
	dayTheme: 'light-default' as ThemeOption['id'],
	nightTheme: 'dark-default' as ThemeOption['id'],
	selectedTheme: 'dark-default' as ThemeOption['id'],
};

export const themes: ThemeOption[] = [
	{
		id: 'light-default',
		label: 'Light Default',
		iconType: 'dark',
		imageSrc: LightDefault,
		buttonImageSrc: LightDefaultButton,
	},
	{
		id: 'dark-default',
		label: 'Dark Default',
		iconType: 'light',
		imageSrc: DarkDefault,
		buttonImageSrc: DarkDefaultButton,
	},
	{
		id: 'dark-dimmed',
		label: 'Dark Default',
		iconType: 'light',
		imageSrc: DarkDimmed,
		buttonImageSrc: DarkDimmedButton,
	},
];
