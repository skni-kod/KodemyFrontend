'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { defaultTheme, SystemColorMode, ThemeOption, themes } from '@/utils/lightMode/themes';
import Loading from '@/components/common/Loading';

export default function AppearanceSettingsSubPage() {
	const [theme, setTheme] = useState(defaultTheme);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(JSON.parse(savedTheme));
		}
	}, []);

	const updateThemes = useCallback(() => {
		const html = document.documentElement;

		html.setAttribute('data-day-theme', theme.dayTheme);
		html.setAttribute('data-night-theme', theme.nightTheme);
		html.setAttribute('data-single-theme', theme.selectedTheme);

		if (theme.colorMode === 'system') {
			html.setAttribute('data-color-mode', 'system');
			const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			html.setAttribute('data-theme', isDarkMode ? theme.nightTheme : theme.dayTheme);
		} else {
			html.setAttribute('data-color-mode', 'single');
			html.setAttribute('data-theme', theme.selectedTheme);
		}

		localStorage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	useEffect(() => {
		if (isClient) {
			updateThemes();
		}
	}, [theme, isClient, updateThemes]);

	const handleChange = (key: keyof typeof theme, value: string) => {
		setTheme((prev: any) => ({ ...prev, [key]: value }));
	};

	if (!isClient)
		return (
			<div className="pt-8">
				<Loading scale="small" />
			</div>
		);

	const findThemeById = (id: string): ThemeOption | undefined => {
		return themes.find((theme) => theme.id === id);
	};

	return (
		<div>
			<h1 className="mb-4 text-2xl font-bold">Wygląd</h1>
			<p className="mb-6">
				Wybierz, jak aplikacja ma wyglądać dla Ciebie. Wybierz pojedynczy motyw lub zsynchronizuj go z systemowym.
				Selekcje są stosowane natychmiast.
			</p>

			<ThemeModeSelector
				colorMode={theme.colorMode as SystemColorMode}
				onChange={(e) => handleChange('colorMode', e.target.value)}
			/>

			{theme.colorMode === 'single' ? (
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					{themes.map((themeOption) => (
						<button
							key={themeOption.id}
							onClick={() => handleChange('selectedTheme', themeOption.id)}
							className={`rounded-lg border-2 text-left ${
								theme.selectedTheme === themeOption.id ? 'border-primary' : 'border-gray'
							}`}
						>
							<Image
								src={themeOption.imageSrc}
								alt={themeOption.label}
								className="mb-2 aspect-video h-auto w-full rounded object-cover"
							/>
							<div className="pb-2 pl-2 text-sm font-medium">{themeOption.label}</div>
						</button>
					))}
				</div>
			) : (
				<div className="grid gap-6 md:grid-cols-2 lg:w-2/3">
					<SystemMode
						isDay={true}
						isModeActive={!window.matchMedia('(prefers-color-scheme: dark)').matches}
						selectedTheme={findThemeById(theme.dayTheme) || themes[0]} // Używamy obiektu ThemeOption
						onClick={(themeId) => handleChange('dayTheme', themeId)}
						allThemes={themes}
					/>
					<SystemMode
						isDay={false}
						isModeActive={window.matchMedia('(prefers-color-scheme: dark)').matches}
						selectedTheme={findThemeById(theme.nightTheme) || themes[0]} // Używamy obiektu ThemeOption
						onClick={(themeId) => handleChange('nightTheme', themeId)}
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
