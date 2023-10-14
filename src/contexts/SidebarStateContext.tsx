import React, { useContext, useState } from 'react';

type SidebarStateContextType = {
	isOpen: boolean;
	setIsOpen: (state: boolean) => void;
};

export const SidebarStateContext = React.createContext<SidebarStateContextType>({
	isOpen: false,
	setIsOpen: () => {},
});

const SidebarStateProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const setSidebarState = (state: boolean) => {
		setIsOpen((isOpen) => !isOpen);
	};

	return (
		<SidebarStateContext.Provider
			value={{
				isOpen,
				setIsOpen: setSidebarState,
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
