import { Rating } from 'react-simple-star-rating';
import Image from 'next/image';
import DocumentsImage from '@/assets/material/documents.png';
import React, { useState } from 'react';
import { Material } from '@/hooks/services/useMaterialService';
import { LuDot } from 'react-icons/lu';

type MaterialUserBlockProps = {
	data: Material;
	children: React.ReactNode;
};

export default function MaterialUserBlock({ data: material, children }: MaterialUserBlockProps) {
	const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);

	const handleOpenDetails = () => {
		setIsOpenDetails((prevState) => !prevState);
	};

	return (
		<div>
			<div
				className="relative py-4 px-6 bg-bg border-2 border-primary rounded-2xl shrink-0 shadow-md cursor-pointer"
				onClick={handleOpenDetails}
			>
				<div className="flex justify-between items-center w-full text-sm">
					<div className="flex items-center">
						<Rating
							initialValue={material.avgGrade}
							SVGstyle={{ display: 'inline' }}
							size={16}
							allowFraction
							readonly
						/>
					</div>
					<div className="text-placeholder2bg">{material.createdDate.split('T')[0]}</div>
				</div>
				<div className="flex justify-between gap-6 w-full py-3">
					<div>
						<Image
							src={DocumentsImage.src}
							alt="Materiał Kodemy"
							className="aspect-square"
							width="65"
							height="65"
						/>
					</div>
					<div className="flex-1">
						<h3 className="text-lg font-semibold text-primary">{material.title}</h3>
						<div className="pt-1">{material.author.username}</div>
						<div className="flex items-center pt-1.5 text-placeholder2bg">
							{material.technologies.map(({ name }, index) => (
								<React.Fragment key={index}>
									<span>{name}</span>
									{index < material.technologies.length - 1 && <LuDot />}
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
