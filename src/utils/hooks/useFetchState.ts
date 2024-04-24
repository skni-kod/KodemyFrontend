import { useCallback, useState } from 'react';

export enum Status {
	PENDING,
	SUCCESS,
	ERROR,
}

const useFetchState = <T>(startStatus?: Status) => {
	const [state, setState] = useState<T | null>(null);
	const [status, setStatus] = useState<Status>(startStatus ?? Status.PENDING);

	const fetch = useCallback((fetchFunction: () => Promise<any>) => {
		fetchFunction()
			.then((data) => {
				setState(data);
				setStatus(Status.SUCCESS);
			})
			.catch((err) => {
				setState(null);
				setStatus(Status.ERROR);
			});
	}, []);

	return { data: state, status, fetch };
};

export default useFetchState;
