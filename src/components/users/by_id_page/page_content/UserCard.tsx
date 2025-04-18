import React from 'react';

import ComponentParentProps from '@/utils/types/node/componentParentProps';

export default function UserCard({ children }: ComponentParentProps) {
	return <div className="rounded-3xl border-2 px-[4vw] pb-[2vw] shadow-md md:px-9 md:pb-4">{children}</div>;
}
