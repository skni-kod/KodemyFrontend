import { MaterialSortField } from '@/services/material/types';
import { UserSortField } from '@/services/user/types';
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
	SETTINGS: `Ustawienia`,
	SIGN_IN: 'Logowanie',
	SIGN_OUT: 'Wylogowanie',
	USERS_MANAGE: 'Zarządzanie użytkownikami',
	AUTH_CALLBACK: 'Autoryzowanie',
	DEV_TOOLS: 'Narzędzia deweloperskie',
};

export const USER_NAV_MENU = {
	LINK: {
		LOGOUT: 'Wyloguj',
		SETTINGS: 'Ustawienia',
		USER_ACCOUNT: 'Konto użytkownika',
		USERS_MATERIALS: 'Materiały użytkowników',
		USERS: 'Użytkownicy',
		YOUR_MATERIALS: 'Twoje materiały',
		DEV_TOOLS: 'Narzędzia deweloperskie',
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
	USER: {
		EMAIL: 'E-mail',
		ROLE: 'Rola',
		ROLES: {
			ROLE_USER: 'Użytkownik',
			ROLE_MODERATOR: 'Moderator',
			ROLE_ADMIN: 'Administrator',
			ROLE_SUPERADMIN: 'Administrator',
			UNKNOWN: 'Nowa rola',
		},
		CREATED: 'Utworzono',
		USER_MATERIALS: 'Materiały użytkownika',
		USER_SESSIONS: 'Sesje użytkownika',
		USER_DETAILS: 'Szczegóły',
		AVATAR: 'Avatar użytkownika',
	},
	IMPLEMENTATION_PROCESS: 'W trakcie implementacji',
	NOT_FOUND_ELEMENTS: 'Nie znaleziono elementów',
	INPUT_PHRASE: 'Wpisz frazę',
	ADD_MATERIAL_MODAL: {
		TITLE: 'Tytuł materiału',
		DESC: 'Opis materiału',
		LINK: 'Link do materiału',
		FIND_TAGS: 'Szukaj tagów',
		SELECTED_TAGS: 'Zaznaczone tagi',
	},
	DEV_TOOLS: {
		ADD_TAGS: 'Dodaj tagi',
		DOWNLOAD_BEARER: 'Pobierz token Bearer',
		REINDEX_MATERIALS: 'Reindeksuj materiały',
	},
};

export const AUTH_PRE_SESSION = 'pre_session';

export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_SORT_DIRECTION = SortDirection.DESC;

export const DEFAULT_MATERIAL_PAGE_SORT = MaterialSortField.CREATED_DATE;
export const DEFAULT_USER_PAGE_SORT = UserSortField.ID;
