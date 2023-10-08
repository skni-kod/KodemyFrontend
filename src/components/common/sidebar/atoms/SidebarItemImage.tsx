import React from 'react';
import Image from 'next/image';
import SidebarAssets from '@/components/common/sidebar/helpers/SidebarAssets';

interface SidebarItemImageProps {
	sectionId: number;
}

const SidebarItemImage = ({ sectionId }: SidebarItemImageProps) => {
	const handleSectionLogo = (id: number) => {
		switch (id) {
			case 1:
				return SidebarAssets.internet;
			case 2:
				return SidebarAssets.console;
			case 3:
				return SidebarAssets.retroGame;
			case 4:
				return SidebarAssets.codingLanguage;
			default:
				return SidebarAssets.moreInfo;
		}
	};

	return (
		<Image
			className="w-6 h-6 cursor-pointer"
			src={handleSectionLogo(sectionId)}
			alt={`Section ${sectionId}`}
		/>
	);
};

export default SidebarItemImage;
