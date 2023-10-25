import React, { useEffect } from 'react';
import axios from 'axios';

import Title from '../atoms/Title';

const ConfirmMsg = ({
	titletext,
	descriptiontext,
	userId,
	sectionID,
	categoryID,
	titlematerial,
	linkmaterial,
	descriptionmaterial,
}: {
	titletext: string;
	descriptiontext: string;
	userId: string;
	sectionID: string;
	categoryID: string;
	titlematerial: string;
	linkmaterial: string;
	descriptionmaterial: string;
}) => {
	const addDataToDatabase = async (
		userId: string,
		sectionID: string,
		categoryID: string,
		titlematerial: string,
		linkmaterial: string,
		descriptionmaterial: string,
	) => {
		try {
			const response = await axios.post('http://localhost:8181/api/materials', {
				title: titlematerial,
				description: descriptionmaterial,
				link: linkmaterial,
				category_id: categoryID,
				type_id: sectionID,
				user_id: userId,
				created_by: userId,
			});

			if (response.status === 200) {
				console.log('Dane zostały pomyślnie dodane do bazy danych.');
			} else {
				console.log('Wystąpił błąd podczas dodawania danych do bazy danych.');
			}
		} catch (error) {
			console.error('Wystąpił błąd podczas wykonywania zapytania HTTP:', error);
		}
	};

	useEffect(() => {
		console.log('XDDDDDDDDDDDD');
		console.log('userId', userId);
		console.log('sectionID', sectionID);
		console.log('categoryID', categoryID);
		console.log('titlematerial', titlematerial);
		console.log('linkmaterial', linkmaterial);
		console.log('descriptionmaterial', descriptionmaterial);
		addDataToDatabase(
			userId,
			sectionID,
			categoryID,
			titlematerial,
			linkmaterial,
			descriptionmaterial,
		);
	}, [userId, sectionID, categoryID, titlematerial, linkmaterial, descriptionmaterial]);

	return (
		<>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			<div className="flex flex-col">
				<h2 className="text-black2white">userId: {userId}</h2>
				<h2 className="text-black2white">sectionID: {sectionID}</h2>
				<h2 className="text-black2white">categoryID: {categoryID}</h2>
				<h2 className="text-black2white">titlematerial: {titlematerial}</h2>
				<h2 className="text-black2white">linkmaterial: {linkmaterial}</h2>
				<h2 className="text-black2white">descriptionmaterial: {descriptionmaterial}</h2>
			</div>
		</>
	);
};

export default ConfirmMsg;
