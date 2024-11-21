import type { StaticImageData } from 'next/image';
import LightDefault from '@/assets/settings/appearance/lightDefault/lightDefault.webp';
import LightDefaultButton from '@/assets/settings/appearance/lightDefault/lightDefaultButton.webp';
import DarkDefault from '@/assets/settings/appearance/darkDefault/darkDefault.webp';
import DarkDefaultButton from '@/assets/settings/appearance/darkDefault/darkDefaultButton.webp';
import DarkDimmed from '@/assets/settings/appearance/darkDimmed/darkDimmed.webp';
import DarkDimmedButton from '@/assets/settings/appearance/darkDimmed/darkDimmedButton.webp';

export type ThemeOption = {
	id: string;
	label: string;
	imageSrc: StaticImageData;
	buttonImageSrc: StaticImageData;
};

export const themes: ThemeOption[] = [
	{ id: 'light-default', label: 'Light Default', imageSrc: LightDefault, buttonImageSrc: LightDefaultButton },
	{ id: 'dark-default', label: 'Dark Default', imageSrc: DarkDefault, buttonImageSrc: DarkDefaultButton },
	{ id: 'dark-dimmed', label: 'Dark Default', imageSrc: DarkDimmed, buttonImageSrc: DarkDimmedButton },
];
