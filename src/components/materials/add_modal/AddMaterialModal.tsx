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

enum Stage {
	SECTION,
	CATEGORY,
	DETAILS,
}

export default function AddMaterialModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	const [stage, setStage] = useState<Stage>(Stage.SECTION);
	const { data: sections, status, fetch: fetchSections } = useFetchState<Section[]>();

	useEffect(() => fetchSections(SectionService.getSections), [fetchSections]);

	const [data, setData] = useState<{
		sectionId?: number;
		categoryId?: number;
		details?: any;
	}>({});

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		link: '',
		tagsIds: [],
	});

	if (status === Status.PENDING) return <Loading full />;
	if (status === Status.ERROR || !sections) return <Error />;

	const handleSectionSelect = (id: number) => {
		if (data.sectionId !== id) {
			setData({ sectionId: id, categoryId: undefined });
		}
	};

	const getModalSize = () => {
		switch (stage) {
			case Stage.SECTION:
				return 'w-128';
			case Stage.CATEGORY:
				return 'w-full';
			case Stage.DETAILS:
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
		}
	};

	const getStageComponent = () => {
		switch (stage) {
			case Stage.SECTION:
				return <SectionSelect sections={sections} onClick={handleSectionSelect} selected={data.sectionId} />;
			case Stage.CATEGORY:
				return (
					<CategorySelect
						categories={data.sectionId ? sections[data.sectionId].categories : []}
						onClick={(id) => setData({ ...data, categoryId: id })}
						selected={data.categoryId}
					/>
				);
			case Stage.DETAILS:
				return <AddMaterial initialData={formData} onChange={(details) => setFormData(details)} />;
		}
	};

	const handleClose = () => {
		setStage(Stage.SECTION);
		setData({});
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
				return !formData.title || !formData.description || !formData.link || formData.tagsIds.length === 0;
		}
	};

	const handlePreviousClick = () => {
		setStage((prevStage) => prevStage - 1);
	};

	const handleNextClick = () => {
		if (stage === Stage.DETAILS) {
			setData({ ...data, details: formData });
		}
		setStage((prevStage) => prevStage + 1);
	};

	console.log('data', data);
	return (
		<>
			{isOpen && (
				<Modal onClose={handleClose} className={`${getModalSize()} max-w-xs xs:w-full`}>
					<div className="w-full text-center">
						<h3 className="text-3xl font-semibold">{getModalHeader()}</h3>
					</div>
					<div className="w-full pt-8">{getStageComponent()}</div>
					<div className="flex w-full flex-col items-center gap-2 pt-8">
						<div className="flex gap-2">
							<Button onClick={handlePreviousClick} disabled={isPreviousStageBtnDisabled()}>
								<FaArrowLeft />
								&nbsp; Poprzednie
							</Button>
							<Button onClick={handleNextClick} disabled={isNextStageBtnDisabled()}>
								Następna&nbsp;
								<FaArrowRight />
							</Button>
						</div>
						<StageDots count={Object.keys(Stage).length / 2} activeIndex={stage} />
					</div>
				</Modal>
			)}
		</>
	);
}
