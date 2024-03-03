import { useEffect, useState } from 'react';

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState<number>(
		typeof window !== 'undefined' ? window.innerWidth : 0,
	);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowWidth;
};

export default useWindowWidth;
