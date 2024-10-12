'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { Section } from '@/services/section/types';
import SectionService from '@/services/section/sectionService';
import SectionBubbleBtn from '@/components/materials/manage_page/page_head/SectionBubbleBtn';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import CategoryBubbleBtns from '@/components/materials/section_by_id_page/page_head/CategoryBubbleBtns';
import { MdArrowBackIos } from 'react-icons/md';

export default function SectionBubbleBtns() {
	const { data: sections, status, fetch: fetchSections } = useFetchState<Section[]>();
	const [activatedSectionId, setActivatedSectionId] = useState<number | null>(null);

	useEffect(() => fetchSections(SectionService.getSections), [fetchSections]);

	const findSectionName = useCallback(() => {
		return (sections && sections.find((section) => section.id === activatedSectionId)?.name) || activatedSectionId;
	}, [activatedSectionId, sections]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !sections) return <Error />;

	return (
		<div className="text-semibold flex w-full flex-wrap items-center gap-4 text-center text-xl">
			{activatedSectionId === null ? (
				<>
					{sections.map(({ id, name, categories }) => (
						<SectionBubbleBtn key={id} name={name} onClick={() => setActivatedSectionId(id)} />
					))}
				</>
			) : (
				<>
					<div className="flex cursor-pointer items-center gap-1 px-2" onClick={() => setActivatedSectionId(null)}>
						<MdArrowBackIos />
						<span>{findSectionName()}</span>
					</div>
					<CategoryBubbleBtns sections={sections} activeSectionId={activatedSectionId} />
				</>
			)}
		</div>
	);
}
