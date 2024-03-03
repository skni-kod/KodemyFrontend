import { AiOutlineClose } from 'react-icons/ai';
import BottomButtons from './atoms/BottomButtons';
import ChooseSection from './organisms/ChooseSection';
import ChooseCategory from './organisms/ChooseCategory';
import DescribeMaterial from './organisms/DescribeMaterial';
import { useState } from 'react';
import ConfirmMsg from './organisms/ConfirmMsg';
import axios from 'axios';
import CloseCross from '../common/CloseCross';

const AddMaterialModalContent = ({ handleClose }: { handleClose: () => void }) => {
	const [currentSection, setCurrentSection] = useState('section1');
	const [nextButtonText, setNextButtonText] = useState('Następne');
	const [sectionID, setSectionID] = useState('0');
	const [categoryID, setCategoryID] = useState('0');
	const [titlematerial, setTitlematerial] = useState('');
	const [linkmaterial, setLinkmaterial] = useState('');
	const [descriptionmaterial, setDescriptionmaterial] = useState('');
	const [responsemsgtitle, setResponseMsgTitle] = useState('');
	const [responsemsgtext, setResponseMsgText] = useState('');

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

	const handleNext = async () => {
		if (currentSection === 'section1') {
			setCurrentSection('section2');
		} else if (currentSection === 'section2') {
			setCurrentSection('section3');
			setNextButtonText('Zakończ');
		} else if (currentSection === 'section3') {
			try {
				const typeId = +sectionID;
				const categoryId = +categoryID;
				// 8080 - trzeba tokana, 8082 - 401
				const response = await axios.post('http://localhost:8080/api/materials', {
					title: titlematerial,
					description: descriptionmaterial,
					link: linkmaterial,
					typeId: typeId,
					categoryId: categoryId,
					technologiesIds: [2],
				});
				if (response.status === 200) {
					setResponseMsgTitle('Udało się');
					setResponseMsgText('Materiał został dodany');
				} else {
					setResponseMsgTitle('Błąd');
					setResponseMsgText('Materiał nie został dodany');
				}
			} catch (error) {
				setResponseMsgTitle('Błąd');
				setResponseMsgText('Wystąpił błąd podczas wykonywania zapytania HTTP: ' + error);
				console.error(responsemsgtext);
			}
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
			<CloseCross handleCloseCross={handleClose} />
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
						titletext={responsemsgtitle}
						descriptiontext={responsemsgtext}
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