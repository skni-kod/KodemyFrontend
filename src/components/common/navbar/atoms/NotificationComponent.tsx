type NotificationComponentProps = {
	text: string;
	className: string;
};

const NotificationComponent = ({
	text,
	className,
}: NotificationComponentProps) => {
	return (
		<div className="">
			<h6 className={`${className} text-[#666] text-[14px] cursor-pointer`}>
				{text}
			</h6>
		</div>
	);
};

export default NotificationComponent;
