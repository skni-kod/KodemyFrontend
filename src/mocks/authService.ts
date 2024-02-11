import { Pageable } from '@/utils/model/Pageable';
import { User } from '@/hooks/services/useUserService';
import { pageInitialState } from '@/utils/constant';

export function getUsers(): Pageable<User> {
	return {
		...pageInitialState,
		content: [
			{
				id: 1,
				username: 'user1',
				email: 'user1@example.com',
				photo: '',
				createdDate: '2023-12-31T12:00:00',
				role: {
					id: 1,
					name: 'USER',
				},
			},
			{
				id: 2,
				username: 'user2',
				email: 'user2@example.com',
				photo: '',
				createdDate: '2023-12-31T12:00:00',
				role: {
					id: 2,
					name: 'MODERATOR',
				},
			},
			{
				id: 3,
				username: 'user3',
				email: 'user3@example.com',
				photo: '',
				createdDate: '2023-12-31T12:00:00',
				role: {
					id: 3,
					name: 'ADMIN',
				},
			},
			{
				id: 4,
				username: 'user4',
				email: 'user4@example.com',
				photo: '',
				createdDate: '2023-12-31T12:00:00',
				role: {
					id: 4,
					name: 'SUPER_ADMIN',
				},
			},
			{
				id: 5,
				username: 'user5',
				email: 'user5@example.com',
				photo: '',
				createdDate: '2023-12-31T12:00:00',
				role: {
					id: 1,
					name: 'USER',
				},
			},
		],
	};
}
