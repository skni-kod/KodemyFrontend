import React from 'react';

import PhraseField from '@/components/materials/section_by_id_page/page_head/filter_field/PhraseField';
import { TEXT } from '@/utils/constant';
import { MaterialFields } from '@/utils/types/materialSearchParams';
import ComponentParentProps from '@/utils/types/node/componentParentProps';

type FiltersBlockProps = ComponentParentProps & {
	fields: MaterialFields;
};

export default function UserFiltersBlock({ fields }: FiltersBlockProps) {
	const FILTER_FIELD_CLASSNAMES = 'flex items-center gap-2.5 p-2.5 border-2 rounded-2xl overflow-hidden';

	return (
		<div className="w-full px-4">
			<h3 className="w-full pb-5 text-2xl">{TEXT.WHAT_LOOKING_FOR}</h3>
			<div className="flex w-full flex-wrap gap-2 leading-none">
				<PhraseField className={FILTER_FIELD_CLASSNAMES} activePhrase={fields.phrase} />
			</div>
		</div>
	);
}
