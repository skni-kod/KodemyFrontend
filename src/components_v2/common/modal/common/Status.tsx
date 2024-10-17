import clsx from 'clsx';
import { MaterialStatus } from '@/hooks/services/useMaterialService';

export const statusDict: Record<MaterialStatus, { polishVerb: string; className: string }> = {
	[MaterialStatus.PENDING]: { polishVerb: 'Oczekujące', className: 'bg-green-300' },
	[MaterialStatus.APPROVED]: { polishVerb: 'Zatwierdzone', className: 'bg-sky-500' },
	[MaterialStatus.EDITED]: { polishVerb: 'Edytowane', className: 'bg-orange-300' },
	[MaterialStatus.REJECTED]: { polishVerb: 'Odrzucone', className: 'bg-red-400' },
	[MaterialStatus.BANNED]: { polishVerb: 'Zbanowane', className: 'bg-red-600' },
};

export const materialStatusPolishVerbs = () =>
	Object.values(MaterialStatus)
		.filter((value) => typeof value === 'string')
		.map((value) => statusDict[MaterialStatus[value as keyof typeof MaterialStatus]].polishVerb);

const Status = ({ status }: { status: string }) => {
	const statusFormat = statusDict[MaterialStatus[status as keyof typeof MaterialStatus]];

	return (
		<div
			className={clsx(
				'px-1 py-0.5 w-[6.5rem] text-sm text-center text-white2white rounded',
				statusFormat ? statusFormat.className : 'bg-sky-300',
			)}
		>
			{statusFormat ? statusFormat.polishVerb : status}
		</div>
	);
};

export default Status;
