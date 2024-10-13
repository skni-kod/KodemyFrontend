import { Rating } from 'react-simple-star-rating';
import Image from 'next/image';
import DocumentsImage from '@/assets/material/documents.png';
import React, { useState } from 'react';
import { LuDot } from 'react-icons/lu';
import { Material, MaterialSearch } from '@/services/material/types';

type MaterialUserBlockProps = {
	data: MaterialSearch;
	children: React.ReactNode;
};

export default function MaterialListItem({ data: material, children }: MaterialUserBlockProps) {
	const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);

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
					<div className="">{material.createdDate.toString()}</div>
				</div>
				<div className="flex w-full justify-between gap-6 py-3">
					<div>
						<Image src={DocumentsImage.src} alt="Materiał Kodemy" className="aspect-square" width="65" height="65" />
					</div>
					<div className="flex-1">
						<h3 className="text-lg font-semibold text-primary">{material.title}</h3>
						<div className="pt-1">{material.author?.username}</div>
						<div className="flex items-center pt-1.5">
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
