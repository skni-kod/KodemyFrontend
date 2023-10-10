import { Dispatch, SetStateAction } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const FilterMenuButton = ({
	isMenuOpen,
	setIsMenuOpen,
}: {
	isMenuOpen: boolean;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const handleToggleMenu = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	return (
		<div>
			<div className="flex items-center cursor-pointer p-2" onClick={handleToggleMenu}>
				Filtruj {isMenuOpen ? <RxTriangleUp /> : <RxTriangleDown />}
			</div>
		</div>
	);
};

export default FilterMenuButton;
