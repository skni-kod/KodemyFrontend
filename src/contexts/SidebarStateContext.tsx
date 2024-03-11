import React, { useContext, useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';

type SidebarStateContextType = {
	sections: Section[] | null;
	setMenuData: (menuData: Section[]) => void;
	isOpen: boolean;
	setIsOpen: (state: boolean) => void;
};

export const SidebarStateContext = React.createContext<SidebarStateContextType>({
	sections: [],
	setMenuData: () => {},
	isOpen: false,
	setIsOpen: () => {},
});

const SidebarStateProvider = ({ children }: { children: React.ReactNode }) => {
	const [sections, setSections] = useState<Section[] | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleData = (menuData: Section[]) => setSections(menuData);

	const handleOpen = (state: boolean) => setIsOpen(state);

	return (
		<SidebarStateContext.Provider
			value={{
				sections,
				setMenuData: handleData,
				isOpen,
				setIsOpen: handleOpen,
			}}
		>
			{children}
		</SidebarStateContext.Provider>
	);
};

export const useSidebarContext = () => {
	return useContext(SidebarStateContext);
};

export default SidebarStateProvider;
