type StatusProps = {
	status: string;
};

const Status = ({ status }: StatusProps) => {
	return (
		<div className="px-2 py-0.5 bg-sky2002sky600 text-sm text-sky6002sky200 text-semibold rounded">
			{status}
		</div>
	);
};

export default Status;
