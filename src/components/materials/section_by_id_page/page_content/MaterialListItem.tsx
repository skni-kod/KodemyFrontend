'use client';
import React, { useState } from 'react';
import { LuDot } from 'react-icons/lu';
import { Rating } from 'react-simple-star-rating';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

import calculateTimeDifference from '../../../../utils/methods/calculateTimeDifference';

import DocumentsImage from '@/assets/material/documents.png';
import { MaterialSearch } from '@/services/material/types';

type MaterialUserBlockProps = {
	data: MaterialSearch;
	children: React.ReactNode;
};

export default function MaterialListItem({ data: material, children }: MaterialUserBlockProps) {
	const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);
	const rwdXS = useMediaQuery('(min-width:530px)');

	const handleOpenDetails = () => {
		setIsOpenDetails((prevState) => !prevState);
	};

	return (
		<div>
			<div
				className="relative shrink-0 cursor-pointer rounded-2xl border-2 border-primary bg-bg px-6 py-4 shadow-md"
				onClick={handleOpenDetails}
			>
				<div className="flex w-full items-center justify-between text-sm">
					<div className="flex items-center">
						<Rating
							initialValue={material.avgGrade}
							SVGstyle={{ display: 'inline' }}
							size={16}
							allowFraction
							readonly
						/>
					</div>
					<div className="text-xs 2xs:text-sm xs:text-base">
						{calculateTimeDifference(material.createdDate.toString())}
					</div>
				</div>
				<div className="flex w-full justify-between gap-6 py-3">
					<div>
						<Image
							src={DocumentsImage.src}
							alt="Materiał Kodemy"
							className="aspect-square"
							width={rwdXS ? '65' : '50'}
							height={rwdXS ? '65' : '50'}
						/>
					</div>
					<div className="flex-1">
						<h3 className="text-sm font-semibold text-primary 2xs:text-base xs:text-lg">{material.title}</h3>
						<div className="pt-1 text-xs 2xs:text-sm xs:text-base">{material.author?.username}</div>
						<div className="flex items-center pt-1.5 text-xs 2xs:text-sm xs:text-base">
							{material.tags.map(({ name }, index) => (
								<React.Fragment key={index}>
									<span>{name}</span>
									{index < material.tags.length - 1 && <LuDot />}
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
			{isOpenDetails && <div className="px-3">{children}</div>}
		</div>
	);
}
