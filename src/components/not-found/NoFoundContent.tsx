import React from 'react';

import ShowBlockImage from '@/components/home/ShowBlockImage';
import PageContent from '@/components/layout/PageContent';

export default function NoFoundContent() {
	return (
		<PageContent noHeader>
			<section className="relative flex min-h-[50rem] w-full items-center">
				<div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-center overflow-hidden">
					<ShowBlockImage />
				</div>
				<div className="mx-auto w-4/5">
					<div className="w-fit px-20 py-8">
						<div>
							<h3 className="text-5xl font-bold">404</h3>
							<h4 className="pt-6 text-2xl font-bold">Nie znaleziono strony!</h4>
						</div>
					</div>
				</div>
			</section>
		</PageContent>
	);
}
