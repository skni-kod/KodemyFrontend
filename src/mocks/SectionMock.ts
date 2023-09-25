import { SectionResponse } from '@/services/SectionService';

const Sections: SectionResponse = [
	{
		id: 1,
		name: 'Aplikacje webowe',
		categories: [
			{
				id: 16,
				name: 'Projektowanie Web',
			},
			{
				id: 17,
				name: 'Grafika komputerowa',
			},
			{
				id: 1,
				name: 'Frontend Dev',
			},
			{
				id: 2,
				name: 'Backend Dev',
			},
			{
				id: 3,
				name: 'Mobile Dev',
			},
		],
	},
	{
		id: 2,
		name: 'GameDev',
		categories: [
			{
				id: 5,
				name: 'Grafika w grze',
			},
			{
				id: 4,
				name: 'Silnik gier',
			},
			{
				id: 18,
				name: 'Test',
			},
		],
	},
	{
		id: 3,
		name: 'Elektronika/Retro',
		categories: [
			{
				id: 7,
				name: 'Robotyka',
			},
			{
				id: 15,
				name: 'Programowanie wbudowane',
			},
			{
				id: 6,
				name: 'Komputer vintage',
			},
		],
	},
	{
		id: 4,
		name: 'Języki programowania',
		categories: [
			{
				id: 20,
				name: 'Konfiguracja',
			},
			{
				id: 19,
				name: 'Język assemblera',
			},
			{
				id: 8,
				name: 'Struktura danych',
			},
			{
				id: 9,
				name: 'Algorytm',
			},
		],
	},
	{
		id: 5,
		name: 'Inne',
		categories: [
			{
				id: 13,
				name: 'Zarządzanie bazą danych',
			},
			{
				id: 12,
				name: 'Cyberbezpieczeństwo',
			},
			{
				id: 11,
				name: 'Sztuczna inteligencja',
			},
			{
				id: 10,
				name: 'Uczenie maszynowe',
			},
			{
				id: 14,
				name: 'Programowanie sieciowe',
			},
		],
	},
];
export default Sections;
