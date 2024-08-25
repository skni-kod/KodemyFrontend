'use client';
import React, { useContext, useState } from 'react';

type SidebarContextType = {
	isOpen: boolean;
	handleToggle: () => void;
};

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined);

export default SidebarContext;

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggle = () => setIsOpen((state) => !state);

	return (
		<SidebarContext.Provider
			value={{
				isOpen,
				handleToggle,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebar = (): SidebarContextType => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider');
	}
	return context;
};
