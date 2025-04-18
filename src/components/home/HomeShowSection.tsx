'use client';
import React from 'react';

import HomeMoreButton from '@/components/home/HomeMoreButton';
import ShowBlockImage from '@/components/home/ShowBlockImage';
import { TEXT } from '@/utils/constant';

export default function HomeShowSection() {
	return (
		<section className="relative flex min-h-fullContent w-full items-center">
			<div className="absolute bottom-0 left-0 z-0 flex h-full w-full items-end justify-center overflow-hidden">
				<ShowBlockImage />
			</div>
			<div className="relative z-10 mx-auto w-4/5">
				<div className="w-fit px-20 py-8">
					<div>
						<h3 className="text-5xl font-bold">{TEXT.HOME.SHOW_MAIN}</h3>
						<h4 className="pt-6 text-2xl font-bold">{TEXT.HOME.SHOW_SUB_1}</h4>
						<h4 className="text-2xl font-bold">{TEXT.HOME.SHOW_SUB_2}</h4>
					</div>
					<div className="pt-14">
						<HomeMoreButton />
					</div>
				</div>
			</div>
		</section>
	);
}
