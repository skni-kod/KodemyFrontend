import React from 'react';
import PhraseField from '@/components/materials/section_page/page_head/filters/PhraseField';
import GradeField from '@/components/materials/section_page/page_head/filters/GradeField';

const FILTER_FIELD_CLASSNAMES =
	'flex items-center gap-2.5 p-2.5 border-2 border-placeholder2bg rounded-2xl overflow-hidden';

export default function AdminFilterForm() {
	return (
		<div className="flex flex-wrap gap-2 w-full border-black2white text-md leading-none">
			<PhraseField className={FILTER_FIELD_CLASSNAMES} />
			<GradeField className={FILTER_FIELD_CLASSNAMES} />
		</div>
	);
}
