import { FaArrowRight } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import updateSearchParams from '@/utils/createQueryParams';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { PHRASE_PARAM } from '@/utils/filters';
import { useFiltersContext } from '@/contexts/FiltersContext';

export default function PhraseField({ className }: { className: string }) {
	const [phrase, setPhrase] = useState<string | undefined>('');
	const router = useRouter();
	const searchParams = useSearchParams();
	const inputRef = useRef<HTMLInputElement>(null);
	const { filters } = useFiltersContext();

	useEffect(() => {
		setPhrase(filters[PHRASE_PARAM] ? filters[PHRASE_PARAM] : '');
	}, [filters]);

	const handlePhrase = () => {
		const newParams = updateSearchParams(searchParams.toString(), {
			[PHRASE_PARAM]: phrase,
		});
		router.push(router.pathname + `?${newParams}`);
		inputRef?.current?.blur();
	};

	return (
		<div className={className}>
			<input
				placeholder="Wpisz frazę"
				className="border-0 focus:outline-none bg-transparent"
				value={phrase}
				name="phrase"
				onChange={(e) => setPhrase(e.target.value)}
				onKeyDown={(event) => event.key === 'Enter' && handlePhrase()}
				ref={inputRef}
			/>
			<button className="text-primary cursor-pointer" onClick={handlePhrase}>
				<FaArrowRight />
			</button>
		</div>
	);
}
