'use client';
import React, { useState, useEffect } from 'react';
import MinGradeRangeField from './MinGradeRangeField';
import MaxGradeRangeField from './MaxGradeRangeField';

type GradeRangeFieldProps = {
	className: string;
	activeRange: { minAvgGrade: number; maxAvgGrade: number };
};

export default function GradeRangeField({ className = '', activeRange }: GradeRangeFieldProps) {
	const [minGrade, setMinGrade] = useState<number>(activeRange.minAvgGrade);
	const [maxGrade, setMaxGrade] = useState<number>(activeRange.maxAvgGrade);

	useEffect(() => {
		setMinGrade(activeRange.minAvgGrade);
		setMaxGrade(activeRange.maxAvgGrade);
	}, [activeRange]);

	return (
		<div className={`flex flex-col items-center space-y-6 ${className}`}>
			<div className="w-full max-w-lg">
				<div className="mb-2 flex justify-between text-sm text-secondary">
					{[0, 1, 2, 3, 4, 5].map((grade) => (
						<span
							key={grade}
							className={`px-2 ${grade >= minGrade && grade <= maxGrade ? 'font-bold text-primary' : ''}`}
						>
							{grade}
						</span>
					))}
				</div>
				<div className="relative w-full">
					<div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-secondary" />
					<div
						className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary"
						style={{
							left: `${(minGrade / 5) * 100}%`,
							right: `${(1 - maxGrade / 5) * 100}%`,
						}}
					/>
					<MinGradeRangeField minGrade={minGrade} maxGrade={maxGrade} onChange={(value) => setMinGrade(value)} />
					<MaxGradeRangeField minGrade={minGrade} maxGrade={maxGrade} onChange={(value) => setMaxGrade(value)} />
				</div>
			</div>
		</div>
	);
}
