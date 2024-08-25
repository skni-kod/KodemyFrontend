import React from 'react';
import ComponentParentProps from '@/utils/types/node/componentParentProps';
import Container from '@/components/layout/Container';

interface PageProps extends ComponentParentProps {
	headerValue?: string;
	noHeader?: boolean;
	noContainer?: boolean;
}

export default function PageContent({ headerValue, noHeader = false, noContainer = false, children }: PageProps) {
	const contentClasses = `${noHeader ? '' : ' pt-2'}`;
	const headerClasses = `text-semibold w-full text-4xl${noHeader ? '' : ' pb-8'}`;

	return (
		<Container clear={noContainer}>
			<div className={contentClasses}>
				{!noHeader && headerValue && <h2 className={headerClasses}>{headerValue}</h2>}
				{children}
			</div>
		</Container>
	);
}
