import { BiBell } from 'react-icons/bi';

export default function NotificationIcoBtn({ onClick }: { onClick: () => void }) {
	return (
		<button className="h-full" onClick={onClick}>
			<BiBell className="block h-7 w-7" />
		</button>
	);
}
