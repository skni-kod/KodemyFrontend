import React from 'react';
import Image from 'next/image';
import { useThemeStore } from '@/store/themeSlice';
import getSectionIco from '@/components/common/sidebar/helpers/SidebarAssets';

interface SidebarItemImageProps {
	sectionId: number;
}

const SidebarItemImage = ({ sectionId }: SidebarItemImageProps) => {
	const { themeMode } = useThemeStore();

	return (
		<Image
			className="w-6 h-6 cursor-pointer"
			src={getSectionIco(sectionId)[themeMode]}
			alt={`Section ${sectionId}`}
		/>
	);
};

export default SidebarItemImage;
