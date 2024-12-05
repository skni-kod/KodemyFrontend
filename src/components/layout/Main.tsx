import React from 'react';
import ComponentParentProps from '@/utils/types/node/componentParentProps';

export default function Main({ children }: ComponentParentProps) {
	return <main className="ml-side mt-nav min-h-fullContent bg-bg">{children}</main>;
}
