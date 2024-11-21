import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ThemeOption, themes } from '@/utils/lightMode/themes';

type SystemColorMode = 'system' | 'single';

export default function AppearanceSettingsSubPage() {
	const [colorMode, setColorMode] = useState<SystemColorMode>(
		() => (localStorage.getItem('colorMode') as SystemColorMode) || 'single',
	);

	const [selectedDayTheme, setDayTheme] = useState<ThemeOption>(
		() =>
			themes.find((theme) => theme.id === localStorage.getItem('dayTheme')) ||
			themes.find((theme) => theme.id === 'light-default')!,
	);

	const [selectedNightTheme, setNightTheme] = useState<ThemeOption>(
		() =>
			themes.find((theme) => theme.id === localStorage.getItem('nightTheme')) ||
			themes.find((theme) => theme.id === 'dark-default')!,
	);

	const [selectedTheme, setTheme] = useState<ThemeOption>(
		() =>
			themes.find((theme) => theme.id === localStorage.getItem('selectedTheme')) ||
			themes.find((theme) => theme.id === 'dark-default')!,
	);

	useEffect(() => {
		// Save settings to localStorage whenever they change
		localStorage.setItem('colorMode', colorMode);
		localStorage.setItem('dayTheme', selectedDayTheme.id);
		localStorage.setItem('nightTheme', selectedNightTheme.id);
		localStorage.setItem('selectedTheme', selectedTheme.id);
	}, [colorMode, selectedDayTheme, selectedNightTheme, selectedTheme]);

	useEffect(() => {
		// Apply the selected theme to the document
		const applyTheme = () => {
			let theme = selectedTheme;
			if (colorMode === 'system') {
				const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
				theme = isDarkMode ? selectedNightTheme : selectedDayTheme;
			}
			document.documentElement.setAttribute('data-theme', theme.id);
		};

		applyTheme();

		// Listen for system dark mode changes if in 'system' mode
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => colorMode === 'system' && applyTheme();

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [colorMode, selectedDayTheme, selectedNightTheme, selectedTheme]);

	return (
		<div>
			<h1 className="mb-4 text-2xl font-bold">Wygląd</h1>
			<p className="mb-6">
				Wybierz, jak aplikacja ma wyglądać dla Ciebie. Wybierz pojedynczy motyw lub zsynchronizuj go z systemowym.
				Selekcje są stosowane natychmiast i automatycznie zapisywane.
			</p>

			<ThemeModeSelector colorMode={colorMode} onChange={(e) => setColorMode(e.target.value)} />

			{colorMode === 'single' ? (
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					{themes.map((theme) => (
						<button
							key={theme.id}
							onClick={() => setTheme(theme)}
							className={`rounded-lg border-2 text-left ${
								selectedTheme.id === theme.id ? 'border-primary' : 'border-gray'
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
				<div className="grid gap-6 md:grid-cols-2 lg:w-2/3">
					<SystemMode
						isDay
						isModeActive
						selectedTheme={selectedDayTheme}
						onClick={(themeId) => setDayTheme(themes.find((theme) => theme.id === themeId)!)}
						allThemes={themes}
					/>

					<SystemMode
						isDay={false}
						isModeActive
						selectedTheme={selectedNightTheme}
						onClick={(themeId) => setNightTheme(themes.find((theme) => theme.id === themeId)!)}
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
			<label htmlFor="theme-mode" className="mb-1 block text-sm font-medium text-secondary">
				Wygląd
			</label>
			<select
				id="theme-mode"
				value={colorMode}
				onChange={onChange}
				className="w-full rounded-md border bg-bg p-2 text-secondary"
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
		<div className="rounded-lg border bg-bg p-4">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-lg font-semibold">{isDay ? '☀️ Day theme' : '🌙 Night theme'}</h2>
				{isModeActive && <span className="rounded border border-primary px-2 py-1 text-xs text-primary">Active</span>}
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
					{hoveredTheme ? hoveredTheme.label : selectedTheme.label}
				</div>
			</div>

			<div className="flex justify-center gap-4">
				{allThemes.map((theme) => (
					<button
						key={theme.id}
						onClick={() => onClick(theme.id)}
						onMouseEnter={() => setHoveredTheme(theme)}
						onMouseLeave={() => setHoveredTheme(null)}
						className={`relative h-8 w-8 rounded-full border-2 ${selectedTheme.id === theme.id ? 'border-primary' : 'border-secondary'} transition-colors duration-300 ease-in-out`}
					>
						<Image
							src={theme.buttonImageSrc}
							alt={theme.label}
							className={`h-full w-full rounded-full object-cover object-center transition-transform duration-300 ease-in-out ${selectedTheme.id === theme.id ? 'scale-75 border-2 border-gray' : 'scale-100'}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
