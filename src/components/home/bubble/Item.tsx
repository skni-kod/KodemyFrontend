import clsx from 'clsx';

type Props = {
	children: JSX.Element;
	className?: String;
	name: String;
	description: String;
	category: String;
	chosenCategory: String;
	status: 'Zatwierdzony' | 'Odrzucony' | 'Oczekujący';
	addedBy: String;
	data: String;
	item: String;
	setItem: Function;
};

const Item = ({
	children,
	className,
	item,
	name,
	description,
	setItem,
	category,
	chosenCategory,
	status,
	addedBy,
	data,
}: Props) => {
	const handleClick = () => {
		setItem(name);
	};
	if (category == chosenCategory)
		return (
			<>
				<div
					className={clsx(
						' divide-x-2 divide-gray-400 cursor-pointer h-32 relative py-2 px-4 mx-5 rounded-3xl border-2 font-semibold text-center items-center flex shrink-0  text-[1.1rem]  shadow-lg bg-white ',
						item === name && 'border-sky-500 ',
						item !== name && 'border-gray-400  ',
						status === 'Odrzucony' && 'border-red-600',
						className,
					)}
					onClick={handleClick}
				>
					<div className=" max-h-fit">
						<p className=" mx-32 -my-1 text-left text-gray-400 text-base ">
							ocena
						</p>
						<div className="flex ">
							<p className=" mx-32 text-justify ">{name}</p>
							<p
								className={clsx(
									'px-2 -mx-28 text-center text-base items-center justify-center relative bg-sky-300',
									status === 'Zatwierdzony' && ' bg-sky-300 text-sky-600  ',
									status === 'Odrzucony' && 'bg-red-300 text-red-600',
									status === 'Oczekujący' && 'bg-gray-300 text-gray-600',
								)}
							>
								{status}
							</p>
						</div>
						<p className=" text-justify mx-32 text-gray-500 text-sm w-auto max-w-2xl">
							{description}
						</p>
					</div>
					<div className=" text-gray-400 pl-2 mx-auto text-sm text-left absolute right-4 ">
						<p> Dodane przez: {addedBy}</p>
						<p> Data dodania: {data}</p>
					</div>
				</div>
			</>
		);
	else return <></>;
};

export default Item;
