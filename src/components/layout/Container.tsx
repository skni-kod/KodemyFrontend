import React from 'react';
import ComponentParentProps from '@/utils/types/node/componentParentProps';

export default function Container({ clear = false, children }: ComponentParentProps & { clear?: boolean }) {
	return <div className={clear ? '' : 'mx-auto w-4/5 px-4 pt-8'}>{children}</div>;
}
