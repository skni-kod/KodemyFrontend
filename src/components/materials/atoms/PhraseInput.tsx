import { useState } from 'react';

type PhraseInputProps = {
	className?: string;
	placeholder: string;
	setCurrentValue: (current: string | undefined) => void;
};

const PhraseInput = ({ className, placeholder, setCurrentValue }: PhraseInputProps) => {
	const [phrase, setPhrase] = useState<string | undefined>();

	const handleButtonClick = () => {
		setCurrentValue(phrase);
	};

	return (
		<div className={`flex items-center ${className}`}>
			<input
				className="w-full h-12 px-4 border-none active:border-inherit focus-visible:border-inherit rounded-sm bg-white2verydarkgrey"
				type="text"
				value={phrase}
				placeholder={placeholder}
				onChange={(e) => setPhrase(e.target.value)}
			/>
			<button
				className="bg-sky-500 hover:bg-blue-600 text-white2white text-sm w-20 h-12"
				onClick={handleButtonClick}
			>
				Szukaj
			</button>
		</div>
	);
};

export default PhraseInput;
