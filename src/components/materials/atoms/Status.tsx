type StatusProps = {
	status: string;
};

const Status = ({ status }: StatusProps) => {
	return (
		<div className="px-2 py-0.5 bg-sky-200 text-sm text-sky-600 text-semibold">
			{status}
		</div>
	);
};

export default Status;
