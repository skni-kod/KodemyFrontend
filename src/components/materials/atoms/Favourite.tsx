import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

type FavouriteProps = {
	isFavouriteFilled: boolean;
	handleFavouriteClick: () => void;
};

const Favourite = ({ isFavouriteFilled, handleFavouriteClick }: FavouriteProps) => {
	return (
		<div onClick={handleFavouriteClick}>
			{isFavouriteFilled ? (
				<AiFillStar size={50} className="text-yellow-500" title="Usuń z ulubionych" />
			) : (
				<AiOutlineStar size={50} className="text-yellow-500" title="Dodaj do ulubionych" />
			)}
		</div>
	);
};

export default Favourite;
