import React, { useEffect, useState } from 'react';
import Modal from '@/components/utils/Modal';
import SectionSelect from '@/components/materials/add_modal/stages/SectionSelect';
import Button from '@/components/utils/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AddMaterial from '@/components/materials/add_modal/stages/AddMaterial';
import CategorySelect from '@/components/materials/add_modal/stages/CategorySelect';
import StageDots from '@/components/materials/add_modal/StageDots';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { Section } from '@/services/section/types';
import SectionService from '@/services/section/sectionService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import MaterialService from '@/services/material/materialService';
import { useSessionContext } from '@/contexts/SessionContext';
import { useToast } from '@/contexts/ToastContext';

enum Stage {
	SECTION,
	CATEGORY,
	DETAILS,
	SUMMARY,
}

export type Details = {
	title: string;
	description: string;
	link: string;
	tagsIds: number[];
};

const emptyDetails: Details = {
	title: '',
	description: '',
	link: '',
	tagsIds: [],
};

export default function AddMaterialModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	const { session } = useSessionContext();
	const [stage, setStage] = useState<Stage>(Stage.SECTION);
	const { data: sections, status, fetch: fetchSections } = useFetchState<Section[]>();
	const { addToast } = useToast();

	useEffect(() => {
		isOpen && fetchSections(SectionService.getSections);
	}, [fetchSections, isOpen]);

	const [data, setData] = useState<{
		sectionId?: number;
		categoryId?: number;
		details?: Details;
	}>({
		details: emptyDetails,
	});

	if (!isOpen) return <></>;
	if (status === Status.PENDING) return <Loading full />;

	const handleSectionSelect = (id: number) => {
		if (data.sectionId !== id) {
			setData((prevData) => ({
				...prevData,
				sectionId: id,
				categoryId: undefined,
			}));
		}
	};

	const getModalSize = () => {
		switch (stage) {
			case Stage.SECTION:
				return 'w-128';
			case Stage.CATEGORY:
			case Stage.DETAILS:
			case Stage.SUMMARY:
				return 'w-full';
		}
	};

	const getModalHeader = () => {
		switch (stage) {
			case Stage.SECTION:
				return 'Wybierz sekcję';
			case Stage.CATEGORY:
				return 'Wybierz kategorię';
			case Stage.DETAILS:
				return 'Opisz materiał';
			case Stage.SUMMARY:
				return 'Potwierdzenie publikacji';
		}
	};

	const handleAddMaterialChange = (details: Details) => {
		setData((prevData) => ({
			...prevData,
			details,
		}));
	};

	const getStageComponent = (sections: Section[]) => {
		switch (stage) {
			case Stage.SECTION:
				return <SectionSelect sections={sections} onClick={handleSectionSelect} selected={data.sectionId} />;
			case Stage.CATEGORY:
				return (
					<CategorySelect
						categories={data.sectionId ? sections[data.sectionId - 1].categories : []}
						onClick={(id: number) => setData({ ...data, categoryId: id })}
						selected={data.categoryId}
					/>
				);
			case Stage.DETAILS:
				return <AddMaterial initialData={data.details!} onChange={handleAddMaterialChange} />;
			case Stage.SUMMARY:
				return (
					<div className="text-center">
						<h4>Czy na pewno chcesz opublikować ten materiał?</h4>
						<p className="pt-2">Po kliknięciu &ldquo;Opublikuj&rdquo;, materiał zostanie udostępniony.</p>
					</div>
				);
		}
	};

	const handleClose = () => {
		setStage(Stage.SECTION);
		setData({
			details: emptyDetails,
		});
		onClose();
	};

	const isPreviousStageBtnDisabled = () => {
		return stage === Stage.SECTION;
	};

	const isNextStageBtnDisabled = () => {
		switch (stage) {
			case Stage.SECTION:
				return !data.sectionId;
			case Stage.CATEGORY:
				return !data.sectionId || !data.categoryId;
			case Stage.DETAILS:
				return !data.sectionId || !data.categoryId;
			case Stage.SUMMARY:
				const { title, description, link, tagsIds = [] } = data.details || {};
				return !title?.trim() || !description?.trim() || !link?.trim() || tagsIds.length === 0;
		}
	};

	const handlePreviousClick = () => {
		setStage((prevStage) => prevStage - 1);
	};

	const handleNextClick = () => {
		setStage((prevStage) => prevStage + 1);
	};

	const handlePublish = async () => {
		try {
			if (!session || !session.token?.bearer) {
				console.error('No session or Bearer token found');
				return;
			}

			const response = await MaterialService.publishMaterial(
				{
					title: data.details!.title,
					description: data.details!.description,
					link: data.details!.link,
					typeId: data.sectionId!,
					categoryId: data.categoryId!,
					tagsIds: data.details!.tagsIds,
				},
				session.token.bearer,
			);

			addToast(`Dodano materiał`, 'success', 5000);
			console.log('Material published successfully:', response);
			handleClose();
		} catch (error) {
			addToast(`Error publishing material`, 'danger', 5000);
			console.error('Error publishing material:', error);
		}
	};

	return (
		<>
			{isOpen && (
				<Modal onClose={handleClose} className={`${getModalSize()} max-w-xs xs:w-full`}>
					{status === Status.ERROR || !sections ? (
						<Error />
					) : (
						<>
							<div className="w-full text-center">
								<h3 className="text-3xl font-semibold">{getModalHeader()}</h3>
							</div>
							<div className="w-full pt-8">{getStageComponent(sections)}</div>
							<div className="flex w-full flex-col items-center gap-2 pt-8">
								<div className="flex items-center gap-2">
									<Button onClick={handlePreviousClick} disabled={isPreviousStageBtnDisabled()}>
										<span className="flex items-center gap-2">
											<FaArrowLeft />
											Poprzednie
										</span>
									</Button>
									<StageDots count={Object.keys(Stage).length / 2} activeIndex={stage} />
									<Button
										onClick={stage === Stage.SUMMARY ? handlePublish : handleNextClick}
										disabled={isNextStageBtnDisabled()}
									>
										<span className="flex items-center gap-2">
											{stage === Stage.SUMMARY ? 'Opublikuj' : 'Następna'}
											{stage === Stage.SUMMARY ? null : <FaArrowRight />}
										</span>
									</Button>
								</div>
							</div>
						</>
					)}
				</Modal>
			)}
		</>
	);
}
