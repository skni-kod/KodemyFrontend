import React from 'react';

import GradeField from '@/components/materials/section_by_id_page/page_head/filter_field/GradeField';
import MaterialSort from '@/components/materials/section_by_id_page/page_head/filter_field/MaterialSort';
import PhraseField from '@/components/materials/section_by_id_page/page_head/filter_field/PhraseField';
import { TEXT } from '@/utils/constant';
import { MaterialSearchParams } from '@/utils/types';
import ComponentParentProps from '@/utils/types/node/componentParentProps';

type FiltersBlockProps = ComponentParentProps & {
	searchParams: MaterialSearchParams;
};

export default function FiltersBlock({ searchParams }: FiltersBlockProps) {
	const FILTER_FIELD_CLASSNAMES = 'flex items-center gap-2.5 p-2.5 border-2 rounded-2xl overflow-hidden';

	return (
		<div className="w-full px-4 pt-6">
			<h3 className="w-full pb-5 text-2xl">{TEXT.WHAT_LOOKING_FOR}</h3>
			<div className="flex w-full flex-wrap gap-2 leading-none">
				<PhraseField className={FILTER_FIELD_CLASSNAMES} activePhrase={searchParams.fields.phrase} />
				<MaterialSort className={FILTER_FIELD_CLASSNAMES} activeSort={searchParams.sort} />
				<GradeField
					className={FILTER_FIELD_CLASSNAMES}
					activeRange={{
						minAvgGrade: searchParams.fields.minAvgGrade ?? 0,
						maxAvgGrade: searchParams.fields.maxAvgGrade ?? 5,
					}}
				/>
			</div>
		</div>
	);
}
