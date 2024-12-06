'use client';
import React, { useEffect, useMemo, useState } from 'react';
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

type SearchBlockProps = {
	rwdSM: boolean;
};

export default function SearchBlock({ rwdSM }: SearchBlockProps) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const SEARCH_PARAMS = useMemo(
		() => ({
			page: 1,
			size: DEFAULT_PAGE_SIZE,
			sort: MaterialSortField.ID,
			sort_direction: SortDirection.ASC,
		}),
		[],
	);

	const { data: materials, status, fetch: fetchMaterials } = useFetchState<Pageable<MaterialSearch>>();

	useEffect(() => {
		if (isOpen) {
			fetchMaterials(() => MaterialService.getMaterials(SEARCH_PARAMS));
		}
	}, [isOpen, fetchMaterials, SEARCH_PARAMS]);

	if (isOpen && status === Status.PENDING)
		return (
			<div className="pt-8">
				<Loading scale="small" />
			</div>
		);
	if (isOpen && (status === Status.ERROR || !materials)) return <Error />;

	return (
		<>
			<div
				className="flex h-full w-full cursor-pointer flex-row items-center rounded-md border px-4 py-2 text-lg font-semibold text-secondary"
				onClick={openModal}
			>
				<div className="flex aspect-square h-full flex-row items-center justify-center">
					<SlMagnifier className="h-full" />
				</div>
				{rwdSM && <span className="ml-2">{TEXT.LOOKING_FOR + '...'}</span>}
			</div>

			{isOpen && (
				<Modal
					onClose={closeModal}
					className="size-[90%] overflow-y-auto border-2 border-secondary bg-bg text-secondary sm:size-2/3"
				>
					<div className="flex flex-col gap-4">
						<h2 className="text-lg font-semibold">{TEXT.WHAT_LOOKING_FOR}</h2>
						<SearchBar onClose={closeModal} data={materials!.content} searchFields={['title', 'description']} />
					</div>
				</Modal>
			)}
		</>
	);
}
