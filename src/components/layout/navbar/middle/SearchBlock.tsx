'use client';
import React, { useEffect, useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import Modal from '@/components/utils/Modal';
import SearchBar from '@/components/utils/SearchBar';
import { DEFAULT_PAGE_SIZE, TEXT } from '@/utils/constant';
import MaterialService from '@/services/material/materialService';
import { MaterialSearch, MaterialSortField } from '@/services/material/types';
import { Pageable, SortDirection } from '@/utils/api/types';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';

export default function SearchBlock() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const searchParams = {
		page: 1,
		size: DEFAULT_PAGE_SIZE,
		sort: MaterialSortField.ID,
		sort_direction: SortDirection.ASC,
	};

	const { data: materials, status, fetch: fetchMaterials } = useFetchState<Pageable<MaterialSearch>>();

	if (!isOpen) return <></>;

	useEffect(() => {
		isOpen &&
			fetchMaterials(() => {
				return MaterialService.getMaterials(searchParams);
			});
	}, []);

	if (status === Status.PENDING)
		return (
			<div className="pt-8">
				<Loading scale="small" />
			</div>
		);
	if (status === Status.ERROR || !materials) return <Error />;

	return (
		<>
			<div
				className="flex h-full w-full cursor-pointer flex-row items-center rounded-md border px-4 py-2 text-lg font-semibold text-secondary"
				onClick={openModal}
			>
				<div className="aspect-square h-full">
					<SlMagnifier className="h-full" />
				</div>
				<span className="ml-2">{TEXT.LOOKING_FOR + '...'}</span>
			</div>

			{isOpen && (
				<Modal
					onClose={closeModal}
					className="size-[90%] overflow-y-auto border-2 border-primary bg-secondary text-textOnSecondary sm:size-2/3"
				>
					<div className="flex flex-col gap-4">
						<h2 className="text-lg font-semibold">{TEXT.WHAT_LOOKING_FOR}</h2>
						<SearchBar onClose={closeModal} data={materials.content} searchFields={['title', 'description']} />
					</div>
				</Modal>
			)}
		</>
	);
}
