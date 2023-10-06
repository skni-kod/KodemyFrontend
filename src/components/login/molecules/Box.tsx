import React from 'react';
import Button from '../atoms/Button';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';

export default function Box() {
	const iconName1 = AiFillGithub;
	const companyName1 = 'Github';

	const iconName2 = AiFillGoogleCircle;
	const companyName2 = 'Google';
	return (
		<div className="flex flex-col items-center justify-center text-center mb-[3vh]">
			<div className="flex flex-col items-center gap-9 mt-[30px] h-auto text-black2white text-3xl font-bold mb-[2vh]">
				Logowanie
			</div>
			<a>
				<Button iconname={iconName1} companyname={companyName1} />
			</a>
			<a>
				<Button iconname={iconName2} companyname={companyName2} />
			</a>
		</div>
	);
}
