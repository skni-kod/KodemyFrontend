'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { buildFieldsForURLSearchParam, parseFieldsFromURLSearchParam } from '@/utils/methods';

type MaxGradeRangeFieldProps = {
	minGrade: number;
	maxGrade: number;
	onChange: (value: number) => void;
};

const MaxGradeRangeField: React.FC<MaxGradeRangeFieldProps> = ({ minGrade, maxGrade, onChange }) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10);
		if (value >= minGrade) {
			onChange(value);
			const params = new URLSearchParams(searchParams);
			params.set(
				'fields',
				buildFieldsForURLSearchParam({
					...parseFieldsFromURLSearchParam(params.get('fields')),
					maxAvgGrade: value,
				}),
			);
			router.push(`?${params}`);
		}
	};

	return (
		<input
			type="range"
			min={0}
			max={5}
			value={maxGrade}
			onChange={handleChange}
			className="pointer-events-auto absolute z-10 h-2 w-full appearance-none bg-transparent accent-primary"
			style={{ touchAction: 'none' }}
		/>
	);
};

export default MaxGradeRangeField;
