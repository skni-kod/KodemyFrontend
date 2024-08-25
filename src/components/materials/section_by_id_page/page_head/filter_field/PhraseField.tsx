'use client';
import { FaArrowRight } from 'react-icons/fa6';
import { useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { isHasText } from '@/utils/methods';
import { MaterialFields } from '@/utils/types/materialSearchParams';

type PhraseFieldProps = {
	className: string;
	activePhrase?: string;
};

export default function PhraseField({ className, activePhrase }: PhraseFieldProps) {
	const [phrase, setPhrase] = useState<string | undefined>(activePhrase ?? '');
	const inputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const router = useRouter();

	const handlePhrase = () => {
		const params = new URLSearchParams(searchParams);
		const fields: MaterialFields = {
			...JSON.parse(params.get('fields') ?? '{}'),
			phrase: isHasText(phrase) ? phrase : undefined,
		};
		params.set('fields', JSON.stringify(fields));
		router.push(`?${params}`);
	};

	return (
		<div className={className}>
			<input
				placeholder="Wpisz frazę"
				className="border-0 bg-transparent focus:outline-none"
				value={phrase}
				name="phrase"
				onChange={(e) => setPhrase(e.target.value)}
				onKeyDown={(event) => event.key === 'Enter' && handlePhrase()}
				ref={inputRef}
			/>
			<button className="cursor-pointer text-primary" onClick={handlePhrase}>
				<FaArrowRight />
			</button>
		</div>
	);
}
