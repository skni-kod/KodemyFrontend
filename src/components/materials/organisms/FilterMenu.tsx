import { useState } from 'react';

const FilterMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const handleToggleMenu = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	return <></>;
};

export default FilterMenu;
