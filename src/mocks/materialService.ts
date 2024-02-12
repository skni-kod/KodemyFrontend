import {Pageable} from "@/utils/model/Pageable";
import {Material} from "@/hooks/services/useMaterialService";

export function getMaterials(): Pageable<Material> {
	return {
		size: 20,
		pageable: {
			offset: 0,
			pageNumber: 0,
			pageSize: 20,
			paged: true,
		},
		totalPages: 8,
		totalElements: 110,
		content: [
			{
				id: 1,
				title: 'Wprowadzenie do programowania w języku Java',
				link: '',
				description: 'Ten materiał stanowi wprowadzenie do języka programowania Java.',
				status: 'APPROVED',
				active: true,
				avgGrade: 4.5,
				author: {
					id: 1,
					username: 'java_master',
				},
				createdDate: '2024-02-10T14:30:00',
				sectionId: 10,
				categoryId: 20,
				technologies: [
					{
						id: 1,
						name: 'Java',
					},
					{
						id: 2,
						name: 'Programowanie obiektowe',
					},
				],
			},
			{
				id: 2,
				title: 'Python dla analizy danych',
				link: '',
				description:
					'Ten materiał obejmuje programowanie w języku Python dla zastosowań związanych z analizą danych.',
				status: 'PENDING',
				active: false,
				avgGrade: 0,
				author: {
					id: 2,
					username: 'data_scientist',
				},
				createdDate: '2024-01-25T10:45:00',
				sectionId: 11,
				categoryId: 21,
				technologies: [
					{
						id: 3,
						name: 'Python',
					},
					{
						id: 4,
						name: 'Analiza danych',
					},
				],
			},
			{
				id: 3,
				title: 'Podstawy tworzenia stron internetowych',
				link: '',
				description: 'Materiał wprowadzający do technologii tworzenia stron internetowych.',
				status: 'REJECTED',
				active: false,
				avgGrade: 0,
				author: {
					id: 3,
					username: 'web_dev_guru',
				},
				createdDate: '2023-12-20T09:15:00',
				sectionId: 12,
				categoryId: 22,
				technologies: [
					{
						id: 5,
						name: 'HTML',
					},
					{
						id: 6,
						name: 'CSS',
					},
					{
						id: 7,
						name: 'JavaScript',
					},
				],
			},
			{
				id: 4,
				title: 'Podstawy uczenia maszynowego',
				link: '',
				description:
					'Obszerna publikacja dotycząca podstawowych pojęć i algorytmów uczenia maszynowego.',
				status: 'EDITED',
				active: true,
				avgGrade: 4.2,
				author: {
					id: 4,
					username: 'ml_expert',
				},
				createdDate: '2024-02-05T11:00:00',
				sectionId: 13,
				categoryId: 23,
				technologies: [
					{
						id: 8,
						name: 'Uczenie maszynowe',
					},
					{
						id: 9,
						name: 'Sztuczna inteligencja',
					},
				],
			},
			{
				id: 5,
				title: 'Podstawy cyberbezpieczeństwa',
				link: '',
				description: 'Przegląd podstawowych koncepcji związanych z cyberbezpieczeństwem.',
				status: 'BANNED',
				active: false,
				avgGrade: 0,
				author: {
					id: 5,
					username: 'security_ninja',
				},
				createdDate: '2024-01-15T16:20:00',
				sectionId: 14,
				categoryId: 24,
				technologies: [
					{
						id: 10,
						name: 'Cyberbezpieczeństwo',
					},
				],
			},
		],
	};
}
