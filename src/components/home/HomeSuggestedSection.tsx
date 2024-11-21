import React from 'react';

export default function HomeSuggestedSection() {
	return (
		<section className="w-full">
			<div className="mx-auto w-4/5 pt-28">
				<h3 className="block text-center text-4xl font-bold">Polecane materiały</h3>
				<div className="pt-10">
					<div className="grid grid-cols-5 grid-rows-1 justify-center gap-6 p-6">
						{[1, 2, 3, 4, 5].map((item, idx) => (
							<div key={idx} className="flex flex-col justify-center gap-6 border border-secondary p-6">
								<div>
									<div className="mx-auto h-40 w-40 border border-secondary"></div>
								</div>
								<div className="text-center">
									<h5>Tytuł</h5>
									<div>???</div>
								</div>
								<div className="text-center">Sprawdź</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
