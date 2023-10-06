import clsx from 'clsx';

const sectionFilter = (name: string, section: string, setSection: Function) => {
	const handleClick = () => {
		setSection(name);
	};
	return (
		<div
			className={clsx(
				'p-3 my-2  bg-white2darkgrey text-black2white border-2 cursor-pointer border-grey2white rounded-2xl',
				section === name && 'border-sky-500 text-sky-500 shadow-lg',
			)}
			onClick={handleClick}
		>
			{name}
		</div>
	);
};
export default sectionFilter;
