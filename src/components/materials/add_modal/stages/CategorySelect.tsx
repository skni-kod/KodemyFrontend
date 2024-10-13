import clsx from 'clsx';
import { Category } from '@/services/section/types';

type CategorySelectProps = {
	categories: Category[];
	selected?: number;
	onClick: (id: number) => void;
};

export default function CategorySelect({ categories, selected, onClick }: CategorySelectProps) {
	return (
		<ul className="flex w-full list-none flex-col items-center gap-4">
			{categories.map(({ id, name }) => (
				<li
					key={id}
					className={clsx(
						'flex w-full items-center gap-4 rounded-xl border-2 px-6 py-4',
						selected !== id ? 'border-overlay2bg hover:bg-overlay2bg cursor-pointer' : 'border-primary text-primary',
					)}
					onClick={() => onClick(id)}
				>
					<span className="w-full text-center text-xl font-normal">{name}</span>
				</li>
			))}
		</ul>
	);
}
