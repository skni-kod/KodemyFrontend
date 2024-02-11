import codingLanguage from '@/assets/section/dark/coding-language.png';
import codingLanguageWhite from '@/assets/section/white/coding-language.png';
import console from '@/assets/section/dark/console.png';
import consoleWhite from '@/assets/section/white/console.png';
import internet from '@/assets/section/dark/internet.png';
import internetWhite from '@/assets/section/white/internet.png';
import moreInfo from '@/assets/section/dark/more-information.png';
import moreInfoWhite from '@/assets/section/white/more-information.png';
import retroGame from '@/assets/section/dark/retro-game.png';
import retroGameWhite from '@/assets/section/white/retro-game.png';
import { ThemeMode } from '@/store/themeSlice';

const SidebarAssets = {
	codingLanguage,
	codingLanguageWhite,
	console,
	consoleWhite,
	internet,
	internetWhite,
	moreInfo,
	moreInfoWhite,
	retroGame,
	retroGameWhite,
};

const getIconAsset = (iconName: number, themeMode: ThemeMode) => {
	themeMode = 1;
	switch (iconName) {
		case 1:
			return [SidebarAssets.internet, SidebarAssets.internetWhite][themeMode - 1].src;
		case 2:
			return [SidebarAssets.console, SidebarAssets.consoleWhite][themeMode - 1].src;
		case 3:
			return [SidebarAssets.retroGame, SidebarAssets.retroGameWhite][themeMode - 1].src;
		case 4:
			return [SidebarAssets.codingLanguage, SidebarAssets.codingLanguageWhite][themeMode - 1].src;
		case 5:
			return [SidebarAssets.moreInfo, SidebarAssets.moreInfoWhite][themeMode - 1].src;
		default:
			return '';
	}
};

export default getIconAsset;
