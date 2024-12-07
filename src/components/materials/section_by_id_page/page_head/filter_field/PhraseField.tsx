'use client';
import { useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { useRouter, useSearchParams } from 'next/navigation';

import { TEXT } from '@/utils/constant';
import { buildFieldsForURLSearchParam, isHasText, parseFieldsFromURLSearchParam } from '@/utils/methods';

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
		params.set(
			'fields',
			buildFieldsForURLSearchParam({
				...parseFieldsFromURLSearchParam(params.get('fields')),
				phrase: isHasText(phrase) ? phrase : undefined,
			}),
		);
		router.push(`?${params}`);
	};

	return (
		<div className={className}>
			<input
				placeholder={TEXT.INPUT_PHRASE}
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
