'use client';
import React from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import ComponentParentProps from '@/utils/types/node/componentParentProps';

export default function Main({ children }: ComponentParentProps) {
	const sidebar = useSidebar();

	const isCollapsed = !sidebar.isOpen;

	return (
		<main className={`mt-nav min-h-fullContent bg-bg ${isCollapsed ? 'ml-side' : 'ml-expandSide'}`}>{children}</main>
	);
}
