import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Favourite = () => {
	const [isFilled, setIsFilled] = useState(false);

	const handleClick = () => {
		setIsFilled(!isFilled);
	};

	return (
		<div onClick={handleClick}>
			{isFilled ? (
				<AiFillStar size={50} className="text-yellow-500" title="Usuń z ulubionych" />
			) : (
				<AiOutlineStar size={50} className="text-yellow-500" title="Dodaj do ulubionych" />
			)}
		</div>
	);
};

export default Favourite;
