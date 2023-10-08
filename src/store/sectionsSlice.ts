import { createSlice } from '@reduxjs/toolkit';
import useSectionService, { Section } from '@/hooks/services/useSectionService';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@/store/store';
import { useEffect } from 'react';
import { sortSectionCategory } from '@/utils/constant';

export type SectionState = {
	value: Section[];
};

const initialState: SectionState = {
	value: [],
};

const sectionsSlice = createSlice({
	name: 'sections',
	initialState,
	reducers: {
		setSections(state, action) {
			state.value = action.payload;
		},
	},
});

export default sectionsSlice;

export const useSectionsStore = () => {
	const { getSections } = useSectionService();
	const sections = useSelector<StoreState, Section[]>((state) => state.sections.value);
	const dispatch = useDispatch<StoreDispatch>();

	useEffect(() => {
		if (sections.length === 0)
			(async () => {
				dispatch(sectionsSlice.actions.setSections(sortSectionCategory(await getSections())));
			})();
	}, [dispatch, getSections, sections]);

	return { sections, dispatch };
};
