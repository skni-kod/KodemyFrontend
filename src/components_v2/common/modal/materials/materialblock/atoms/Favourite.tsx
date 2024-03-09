import { useState } from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

const Favourite = () => {
	const [isAdded, setIsAdded] = useState(false);
	const handleAddedeClick = () => {
		setIsAdded(!isAdded);
	};

	return (
		<div onClick={handleAddedeClick}>
			{isAdded ? (
				<BsFillBookmarkPlusFill size={30} className="text-white2black" title="Usuń z ulubionych" />
			) : (
				<BsFillBookmarkPlusFill size={30} className="text-sky-500" title="Dodaj do ulubionych" />
			)}
		</div>
	);
};

export default Favourite;
