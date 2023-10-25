import { AiOutlineClose } from 'react-icons/ai';
import BottomButtons from './atoms/BottomButtons';
import ChooseSection from './organisms/ChooseSection';
import ChooseCategory from './organisms/ChooseCategory';
import DescribeMaterial from './organisms/DescribeMaterial';
import { useEffect, useState } from 'react';
import ConfirmMsg from './organisms/ConfirmMsg';

const AddMaterialModalContent = ({ handleClose }: { handleClose: () => void }) => {
	const [currentSection, setCurrentSection] = useState('section1');
	const [nextButtonText, setNextButtonText] = useState('Następne');
	const [sectionID, setSectionID] = useState('0');
	const handleSectionChange = (newSectionID: string) => {
		setSectionID(newSectionID);
	};

	const [categoryID, setCategoryID] = useState('0');
	const handleCategoryChange = (newCategoryID: string) => {
		setCategoryID(newCategoryID);
	};

	const [titlematerial, setTitlematerial] = useState('');
	const [linkmaterial, setLinkmaterial] = useState('');
	const [descriptionmaterial, setDescriptionmaterial] = useState('');
	const handleMaterialChange = (
		newTitlematerial: string,
		newLinkmaterial: string,
		newDescriptionmaterial: string,
	) => {
		setTitlematerial(newTitlematerial);
		setLinkmaterial(newLinkmaterial);
		setDescriptionmaterial(newDescriptionmaterial);
	};

	const [userId, setUserId] = useState('');

	useEffect(() => {
		const fetchUserId = async () => {
			try {
				const response = await fetch('http://localhost:8181/api/users/me', {
					credentials: 'include',
				});

				if (response.status === 200) {
					const userData = await response.json();
					console.log('userData ', userData);
					setUserId(userData.id);
				} else {
					console.error('Błąd podczas sprawdzania statusu logowania:', response.status);
				}
			} catch (error) {
				console.error('Błąd podczas sprawdzania statusu logowania:', error);
			}
		};
		fetchUserId();
	}, []);

	const handleNext = () => {
		if (currentSection === 'section1') {
			setCurrentSection('section2');
		}
		if (currentSection === 'section3') {
			setCurrentSection('section4');
		} else if (currentSection === 'section2') {
			setCurrentSection('section3');
			setNextButtonText('Zakończ');
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
				<button
					className="font-semibold text-black2white hover:text-sky-500"
					onClick={() => handleClose()}
				>
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
						userId={userId} // Przekazywanie id użytkownika do komponentu ConfirmMsg
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
							<div
								className={`rounded-full w-4 h-4 ${
									currentSection === 'section1' ? 'bg-sky-500' : 'bg-black2white'
								}`}
							></div>
							<div
								className={`rounded-full w-4 h-4 ${
									currentSection === 'section2' ? 'bg-sky-500' : 'bg-black2white'
								}`}
							></div>
							<div
								className={`rounded-full w-4 h-4 ${
									currentSection === 'section3' ? 'bg-sky-500' : 'bg-black2white'
								}`}
							></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AddMaterialModalContent;
