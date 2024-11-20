import React, { useState } from 'react';
import Image from 'next/image';
import { ThemeOption, themes } from '@/utils/lightMode/themes';

type SystemColorMode = 'system' | 'single';

export default function AppearanceSettingsSubPage() {
	const [colorMode, setColorMode] = useState<SystemColorMode>('single');
	const [selectedDayTheme, setDayTheme] = useState<ThemeOption>(
		themes.find((theme: ThemeOption) => theme.id === 'light-default')!,
	);
	const [selectedNightTheme, setSelectedNightTheme] = useState<ThemeOption>(
		themes.find((theme: ThemeOption) => theme.id === 'dark-default')!,
	);

	const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(
		themes.find((theme: ThemeOption) => theme.id === 'dark-default')!,
	);

	console.log('selectedDayTheme', selectedDayTheme.id);
	console.log('selectedNightTheme', selectedNightTheme.id);
	console.log('selectedTheme', selectedTheme.id);
	return (
		<div>
			<h1 className="mb-4 text-2xl font-bold">Wygląd</h1>
			<p className="text-text-on-primary-color mb-6">
				Wybierz, jak aplikacja ma wyglądać dla Ciebie. Wybierz pojedynczy motyw lub zsynchronizuj go z systemowym.
				Selekcje są stosowane natychmiast i automatycznie zapisywane.
			</p>

			<ThemeModeSelector colorMode={colorMode} onChange={(e) => setColorMode(e.target.value)} />

			{colorMode === 'single' ? (
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					{themes.map((theme) => (
						<button
							key={theme.id}
							onClick={() => setSelectedTheme(theme)}
							className={`rounded-lg border-2 text-left ${
								selectedTheme.id === theme.id ? 'border-blue-500' : 'border-gray-300'
							}`}
						>
							<Image
								src={theme.imageSrc}
								alt={theme.label}
								className="mb-2 aspect-video h-auto w-full rounded object-cover"
							/>
							<div className="pb-2 pl-2 text-sm font-medium">{theme.label}</div>
						</button>
					))}
				</div>
			) : (
				<div className="grid gap-6 md:grid-cols-2">
					<SystemMode
						isDay={true}
						isModeActive={true}
						selectedTheme={selectedDayTheme}
						onClick={(themeId) => setDayTheme(themes.find((theme) => theme.id === themeId)!)}
						allThemes={themes}
					/>

					<SystemMode
						isDay={false}
						isModeActive={false}
						selectedTheme={selectedNightTheme}
						onClick={(themeId) => setSelectedNightTheme(themes.find((theme) => theme.id === themeId)!)}
						allThemes={themes}
					/>
				</div>
			)}
		</div>
	);
}

function ThemeModeSelector({ colorMode, onChange }: { colorMode: SystemColorMode; onChange: (e: any) => void }) {
	return (
		<div className="mb-4">
			<label htmlFor="theme-mode" className="text-text-on-primary-color mb-1 block text-sm font-medium">
				Wygląd
			</label>
			<select
				id="theme-mode"
				value={colorMode}
				onChange={onChange}
				className="border-primary-color block w-full rounded-md border p-2 focus:ring focus:ring-blue-500"
			>
				<option value="single">Pojedyńczy tryb</option>
				<option value="system">Synchronizuj z systemem</option>
			</select>
		</div>
	);
}

type SystemModeProps = {
	isModeActive: boolean;
	isDay: boolean;
	onClick: (themeId: string) => void;
	selectedTheme: ThemeOption;
	allThemes: ThemeOption[];
};

function SystemMode({ isDay, isModeActive, selectedTheme, onClick, allThemes }: SystemModeProps) {
	const [hoveredTheme, setHoveredTheme] = useState<ThemeOption | null>(null);

	return (
		<div className="rounded-lg border bg-gray-50 p-4">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-lg font-semibold">{isDay ? '☀️ Day theme' : '🌙 Night theme'}</h2>
				{isModeActive && <span className="rounded bg-blue-500 px-2 py-1 text-xs text-white">Active</span>}
			</div>
			<p className="mb-4 text-sm">
				This theme will be active when your system is set to &quot;
				{isDay ? 'light mode' : 'dark mode'}
				&quot;.
			</p>

			<div className="mb-4 rounded-2xl border p-2">
				<Image
					src={hoveredTheme ? hoveredTheme.imageSrc : selectedTheme.imageSrc}
					alt="Theme Preview"
					className="rounded-xl object-cover"
					layout="responsive"
				/>
				<div className="mt-2 text-center text-sm font-medium">
					{hoveredTheme ? hoveredTheme.label : selectedTheme.label}{' '}
					{/* Show hovered theme label or selected theme label */}
				</div>
			</div>

			<div className="flex justify-center gap-4">
				{allThemes.map((theme) => (
					<button
						key={theme.id}
						onClick={() => onClick(theme.id)}
						onMouseEnter={() => setHoveredTheme(theme)}
						onMouseLeave={() => setHoveredTheme(null)}
						className={`relative h-8 w-8 rounded-full border-2 ${selectedTheme.id === theme.id ? 'border-blue-500' : 'border-gray-400'} transition-colors duration-300 ease-in-out`}
					>
						<Image
							src={theme.buttonImageSrc}
							alt={theme.label}
							className={`h-full w-full rounded-full object-cover object-center transition-transform duration-300 ease-in-out ${selectedTheme.id === theme.id ? 'scale-75 border-2 border-gray-400' : 'scale-100'}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
