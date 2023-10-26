import { AiOutlineClose } from 'react-icons/ai';
import BottomButtons from './atoms/BottomButtons';
import ChooseSection from './organisms/ChooseSection';
import ChooseCategory from './organisms/ChooseCategory';
import DescribeMaterial from './organisms/DescribeMaterial';
import { useEffect, useState } from 'react';
import ConfirmMsg from './organisms/ConfirmMsg';
import axios from 'axios';

const AddMaterialModalContent = ({ handleClose }: { handleClose: () => void }) => {
	const [currentSection, setCurrentSection] = useState('section1');
	const [nextButtonText, setNextButtonText] = useState('Następne');
	const [sectionID, setSectionID] = useState('0');
	const [categoryID, setCategoryID] = useState('0');
	const [titlematerial, setTitlematerial] = useState('');
	const [linkmaterial, setLinkmaterial] = useState('');
	const [descriptionmaterial, setDescriptionmaterial] = useState('');

	const handleSectionChange = (newSectionID: string) => {
		setSectionID(newSectionID);
	};

	const handleCategoryChange = (newCategoryID: string) => {
		setCategoryID(newCategoryID);
	};

	const handleMaterialChange = (
		newTitlematerial: string,
		newLinkmaterial: string,
		newDescriptionmaterial: string,
	) => {
		setTitlematerial(newTitlematerial);
		setLinkmaterial(newLinkmaterial);
		setDescriptionmaterial(newDescriptionmaterial);
	};

	const addDataToDatabase = async () => {
		try {
			const response = await axios.post('http://localhost:8181/api/materials', {
				title: titlematerial,
				description: descriptionmaterial,
				link: linkmaterial,
				typeId: sectionID,
				categoryId: categoryID,
				technologiesIds: [2],
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

	const handleNext = () => {
		if (currentSection === 'section1') {
			setCurrentSection('section2');
		} else if (currentSection === 'section2') {
			setCurrentSection('section3');
			setNextButtonText('Zakończ');
		} else if (currentSection === 'section3') {
			addDataToDatabase();
			setCurrentSection('section4');
		}
	};

	const handlePrevious = () => {
		if (currentSection === 'section2') {
			setCurrentSection('section1');
		} else if (currentSection === 'section3') {
			setCurrentSection('section2');
			setNextButtonText('Następne');
		}
	};

	return (
		<div className="relative w-128 min-h-112 p-3 bg-white2verydarkgrey rounded-2xl">
			<div className="flex justify-end">
				<button className="font-semibold text-black2white hover:text-sky-500" onClick={handleClose}>
					<AiOutlineClose height={24} width={24} />
				</button>
			</div>
			<div className="px-8 py-1">
				{currentSection === 'section1' && (
					<ChooseSection
						titletext="Wybierz sekcje"
						descriptiontext="Tutaj wybierasz sekcję"
						sectionID={sectionID}
						handleSectionChange={handleSectionChange}
					/>
				)}
				{currentSection === 'section2' && (
					<ChooseCategory
						titletext="Wybierz kategorię"
						descriptiontext="Tutaj wybierasz kategorię"
						sectionID={sectionID}
						categoryID={categoryID}
						handleCategoryChange={handleCategoryChange}
					/>
				)}
				{currentSection === 'section3' && (
					<DescribeMaterial
						titletext="Opisz materiał"
						descriptiontext="Tutaj opisujesz materiał"
						titlematerial={titlematerial}
						linkmaterial={linkmaterial}
						descriptionmaterial={descriptionmaterial}
						handleMaterialChange={handleMaterialChange}
					/>
				)}
				{currentSection === 'section4' && (
					<ConfirmMsg
						titletext="Udało się"
						descriptiontext="Dodano materiał"
						sectionID={sectionID}
						categoryID={categoryID}
						titlematerial={titlematerial}
						linkmaterial={linkmaterial}
						descriptionmaterial={descriptionmaterial}
					/>
				)}

				<div className="relative bottom-0 left-0 column w-full pb-3 pt-4">
					{currentSection !== 'section4' && (
						<div className="relative bottom-0 left-0 flex justify-center w-full gap-6">
							<BottomButtons handleState={handlePrevious} buttonText="Wróć" />
							<BottomButtons handleState={handleNext} buttonText={nextButtonText} />
						</div>
					)}
					{currentSection === 'section4' && (
						<div className="relative bottom-0 left-0 flex justify-center w-full gap-6">
							<BottomButtons handleState={handleClose} buttonText="Zakończ" />
						</div>
					)}

					{currentSection !== 'section4' && (
						<div className="flex justify-center gap-4 pt-5">
							{['section1', 'section2', 'section3'].map((section, index) => (
								<div
									key={index}
									className={`rounded-full w-4 h-4 ${
										currentSection === section ? 'bg-sky-500' : 'bg-black2white'
									}`}
								></div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AddMaterialModalContent;
