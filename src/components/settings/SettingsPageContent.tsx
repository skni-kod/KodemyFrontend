'use client';
import PageContent from '@/components/layout/PageContent';
import React, { useState } from 'react';
import SectionBubbleBtn from '@/components/materials/manage_page/page_head/SectionBubbleBtn';
import AppearanceSettingsSubPage from '@/components/settings/page_content/AppearanceSettingsSubPage';
import NotificationSettingsSubPage from '@/components/settings/page_content/NotificationSettingsSubPage';
import ProfileSettingsSubPage from '@/components/settings/page_content/ProfileSettingsSubPage';

type BubbleContent = {
	id: number;
	name: string;
};

const settingsPageContent: BubbleContent[] = [
	{
		id: 1,
		name: 'Wygląd',
	},
	{
		id: 2,
		name: 'Profil',
	},
	{
		id: 3,
		name: 'Powiadomienia',
	},
];

export default function SettingsPageContent() {
	const [activatedSectionId, setActivatedSectionId] = useState<number>(1);

	const renderContent = () => {
		switch (activatedSectionId) {
			case 1:
				return <AppearanceSettingsSubPage />;
			case 2:
				return <ProfileSettingsSubPage />;
			case 3:
				return <NotificationSettingsSubPage />;
			default:
				return <p>Wybierz sekcję, aby zobaczyć szczegóły.</p>;
		}
	};

	return (
		<PageContent headerValue={'Ustawienia'}>
			<div className="text-semibold flex w-full flex-wrap items-center gap-4 text-center text-xl">
				{settingsPageContent.map(({ id, name }) => (
					<SectionBubbleBtn key={id} name={name} onClick={() => setActivatedSectionId(id)} />
				))}
			</div>
			<div className="mt-6">{renderContent()}</div>
		</PageContent>
	);
}
