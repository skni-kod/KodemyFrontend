const List = ({ name }: { name: string }) => {
	return (
		<div className="text-black2white hover:bg-white2black h-8 w-32 rounded border border-gray-500 p-2 flex items-center cursor-pointer">
			<h1>{name}</h1>
		</div>
	);
};

export default List;
