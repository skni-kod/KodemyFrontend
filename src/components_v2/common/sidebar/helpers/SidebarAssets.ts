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

const getSectionIco = (id: number) => {
	switch (id) {
		case 1:
			return [SidebarAssets.internet, SidebarAssets.internetWhite];
		case 2:
			return [SidebarAssets.console, SidebarAssets.consoleWhite];
		case 3:
			return [SidebarAssets.retroGame, SidebarAssets.retroGameWhite];
		case 4:
			return [SidebarAssets.codingLanguage, SidebarAssets.codingLanguageWhite];
		default:
			return [SidebarAssets.moreInfo, SidebarAssets.moreInfoWhite];
	}
};

export default getSectionIco;
