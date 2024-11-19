import React, { useState } from 'react';
import DarkDefault from '@/assets/settings/appearance/dark_default.webp';
import LightDefault from '@/assets/settings/appearance/light_default.webp';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type ThemeOption = {
	lightMode: 'light' | 'dark' | 'both';
	id: string;
	label: string;
	imageSrc: StaticImageData;
};

const themes: ThemeOption[] = [
	{ lightMode: 'light', id: 'light-default', label: 'Light Default', imageSrc: LightDefault },
	{ lightMode: 'dark', id: 'dark-default', label: 'Dark Default', imageSrc: DarkDefault },
	{ lightMode: 'both', id: 'universal-default', label: 'Universal Default', imageSrc: LightDefault }, // Example of a "both" theme
];

export default function AppearanceSettingsSubPage() {
	const [selectedTheme, setSelectedTheme] = useState<string>('light-default'); // For single mode
	const [selectedDayTheme, setSelectedDayTheme] = useState<string>('light-default'); // For system mode (day)
	const [selectedNightTheme, setSelectedNightTheme] = useState<string>('dark-default'); // For system mode (night)
	const [themeMode, setThemeMode] = useState<string>('single'); // "single" or "system"

	// Filter themes dynamically based on lightMode
	const dayThemes = themes.filter((theme) => theme.lightMode === 'light' || theme.lightMode === 'both');
	const nightThemes = themes.filter((theme) => theme.lightMode === 'dark' || theme.lightMode === 'both');

	return (
		<div>
			<h1 className="mb-4 text-2xl font-bold">Wygląd</h1>
			<p className="text-text-on-primary-color mb-6">
				Wybierz, jak aplikacja ma wyglądać dla Ciebie. Wybierz pojedynczy motyw lub zsynchronizuj go z systemowym.
				Selekcje są stosowane natychmiast i automatycznie zapisywane.
			</p>

			<div className="mb-4">
				<label htmlFor="theme-mode" className="text-text-on-primary-color mb-1 block text-sm font-medium">
					Wygląd
				</label>
				<select
					id="theme-mode"
					value={themeMode}
					onChange={(e) => setThemeMode(e.target.value)} // Update themeMode on selection
					className="border-primary-color block w-full rounded-md border p-2 focus:ring focus:ring-blue-500"
				>
					<option value="single">Pojedyńczy tryb</option>
					<option value="system">Synchronizuj z systemem</option>
				</select>
			</div>

			{themeMode === 'single' ? (
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					{themes.map((theme) => (
						<button
							key={theme.id}
							onClick={() => setSelectedTheme(theme.id)}
							className={`rounded-lg border-2 text-left ${
								selectedTheme === theme.id ? 'border-blue-500' : 'border-gray-300'
							}`}
						>
							<Image
								src={theme.imageSrc}
								alt={theme.label}
								className="mb-2 h-20 w-full rounded object-cover"
								layout="responsive"
							/>
							<div className="pb-2 pl-2 text-sm font-medium">{theme.label}</div>
						</button>
					))}
				</div>
			) : (
				<div className="grid gap-6 md:grid-cols-2">
					{/* Day Theme Section */}
					<div className="rounded-lg border bg-gray-50 p-4">
						<div className="mb-4 flex items-center justify-between">
							<h2 className="text-lg font-semibold">☀️ Day theme</h2>
							<span className="rounded bg-blue-500 px-2 py-1 text-xs text-white">Active</span>
						</div>
						<p className="mb-4 text-sm">This theme will be active when your system is set to &quot;light mode&quot;.</p>

						{/* Preview */}
						<div className="mb-4 rounded-lg border p-2">
							<Image
								src={dayThemes.find((theme) => theme.id === selectedDayTheme)?.imageSrc || LightDefault}
								alt="Day Theme Preview"
								className="rounded object-cover"
								layout="responsive"
							/>
							<div className="mt-2 text-center text-sm font-medium">
								{dayThemes.find((theme) => theme.id === selectedDayTheme)?.label || ''}
							</div>
						</div>

						{/* Theme Selector */}
						<div className="flex justify-center gap-4">
							{dayThemes.map((theme) => (
								<button
									key={theme.id}
									onClick={() => setSelectedDayTheme(theme.id)}
									className={`h-8 w-8 rounded-full border-2 ${
										selectedDayTheme === theme.id ? 'border-blue-500' : 'border-gray-300'
									}`}
									style={{
										backgroundImage: `url(${theme.imageSrc.src})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
									aria-label={theme.label}
								/>
							))}
						</div>
					</div>

					{/* Night Theme Section */}
					<div className="rounded-lg border bg-gray-900 p-4 text-white">
						<div className="mb-4 flex items-center justify-between">
							<h2 className="text-lg font-semibold">🌙 Night theme</h2>
							<span className="rounded bg-blue-500 px-2 py-1 text-xs text-white">Active</span>
						</div>
						<p className="mb-4 text-sm">This theme will be active when your system is set to &quot;dark mode&quot;.</p>

						{/* Preview */}
						<div className="mb-4 rounded-lg border p-2">
							<Image
								src={nightThemes.find((theme) => theme.id === selectedNightTheme)?.imageSrc || DarkDefault}
								alt="Night Theme Preview"
								className="rounded object-cover"
								layout="responsive"
							/>
							<div className="mt-2 text-center text-sm font-medium">
								{nightThemes.find((theme) => theme.id === selectedNightTheme)?.label || ''}
							</div>
						</div>

						{/* Theme Selector */}
						<div className="flex justify-center gap-4">
							{nightThemes.map((theme) => (
								<button
									key={theme.id}
									onClick={() => setSelectedNightTheme(theme.id)}
									className={`h-8 w-8 rounded-full border-2 ${
										selectedNightTheme === theme.id ? 'border-blue-500' : 'border-gray-300'
									}`}
									style={{
										backgroundImage: `url(${theme.imageSrc.src})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
									aria-label={theme.label}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
