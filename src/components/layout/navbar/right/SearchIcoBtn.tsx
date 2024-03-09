import { BiSearch } from 'react-icons/bi';

export default function SearchIcoBtn({ onClick }: { onClick: () => void }) {
	return (
		<button className="h-full" onClick={onClick}>
			<BiSearch className="block h-6 w-6" />
		</button>
	);
}
