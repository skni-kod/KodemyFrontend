import { MaterialSortField } from '@/services/material/types';
import { SortDirection } from '@/utils/api/types';

export const METADATA = {
	ASSETS: [],
	DESCRIPTION: 'Kodemy - najlepszy zbiór materiałów',
	KEYWORDS: ['kodemy', 'materialy', 'sknikod', 'skni', 'prz', 'rzeszow'],
	TITLE: {
		template: '%s - Kodemy',
		default: 'Kodemy',
	},
};

export const PAGE_TITLE = {
	HOME: 'Strona główna',
	MATERIAL_BY_USER: 'Materiały użytkownika',
	MATERIALS_MANAGE: 'Zarządzanie materiałami',
	NOT_FOUND: 'Nie znaleziono strony',
	SECTION_BY_ID: 'Materiały sekcji',
	SIGN_IN: 'Logowanie',
	USERS_MANAGE: 'Zarządzanie użytkownikami',
	AUTH_CALLBACK: 'Autoryzowanie',
};

export const USER_NAV_MENU = {
	LINK: {
		LOGOUT: 'Wyloguj',
		SETTINGS: 'Ustawienia',
		USER_ACCOUNT: 'Konto użytkownika',
		USER_MATERIALS: 'Materiały użytkowników',
		USERS: 'Użytkownicy',
		YOUR_MATERIALS: 'Twoje materiały',
	},
	GROUP: {
		ACCOUNT_HEADER: 'KONTO',
		ADMIN_HEADER: 'ADMINISTRACJA',
		CONTENT_HEADER: 'ZAWARTOŚĆ',
	},
};

export const TEXT = {
	AUTH: {
		CONTINUE_WITH: 'Kontynuuj z',
		SIGN_IN_OR_UP: 'Zaloguj się lub stwórz konto',
	},
	CHECK_UPPER: 'SPRAWDŹ',
	HOME: {
		SHOW_MAIN: 'Kodemy',
		SHOW_SUB_1: 'Szukasz materiału o konkretnej tematyce?',
		SHOW_SUB_2: 'U nas znajdziesz wszystko.',
	},
	WHAT_LOOKING_FOR: 'Czego szukasz?',
	SIGN_IN: 'Zaloguj się',
	LOOKING_FOR: 'Szukaj',
};

export const MATERIAL_PAGE_SIZE = 20;
export const MATERIAL_PAGE_SORT = MaterialSortField.CREATED_DATE;
export const MATERIAL_PAGE_SORT_DIRECTION = SortDirection.DESC;
