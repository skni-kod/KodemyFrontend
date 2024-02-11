import Page from '@/components/layout/Page';
import { useEffect, useState } from 'react';
import { pageInitialState } from '@/utils/constant';
import Paginator from '@/components/materials/section_page/page_content/Paginator';
import ResultCount from '@/components/materials/section_page/page_content/ResultCount';
import { Pageable } from '@/utils/model/Pageable';
import { User } from '@/hooks/services/useUserService';
import { getUsers } from '@/mocks/authService';
import UserBlock from '@/components/admin/users_page/page_content/UserBlock';
import DetailsDropDown from '@/components/admin/users_page/page_content/user_dropdown/DetailsDropDown';

export default function UsersManage() {
	const [users, setUsers] = useState<Pageable<User>>(pageInitialState);

	useEffect(() => {
		setUsers(getUsers);
	}, []);

	return (
		<Page>
			<div>
				<h2 className="w-full text-4xl text-semibold">Użytkownicy</h2>
				<div className="py-2">
					<div className="flex justify-end items-center w-full px-4">
						<ResultCount value={users.content.length} />
					</div>
					<div className="flex flex-col gap-6 w-full pt-5">
						{users.content.map((user, index) => (
							<UserBlock key={index} data={user}>
								<DetailsDropDown id={user.id} />
							</UserBlock>
						))}
					</div>
					<div className="flex justify-center w-full pt-6">
						<Paginator page={users.pageable.pageNumber} total={users.totalPages} />
					</div>
				</div>
			</div>
		</Page>
	);
}
