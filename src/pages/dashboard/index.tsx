import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import AdminContent from '@/components/dashboard/AdminContent';
import FavouriteContent from '@/components/dashboard/FavouriteContent';
import UserContent from '@/components/dashboard/UserContent';

const Index = () => {
	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				<h1>witam</h1>
			</Container>
		</Page>
	);
};

export default Index;
