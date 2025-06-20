/* import React, { useState, useEffect } from 'react';
import './ThemeExample.css';

// Componentes auxiliares
const ThemeHeader: React.FC<{ title: string }> = ({ title }) => (
	<header className="theme-header">
		<h2>{title}</h2>
	</header>
);

const ThemeFeature: React.FC<{ name: string; enabled: boolean }> = ({ name, enabled }) => (
	<div className="theme-feature">
		<span>{name}</span>
		<span className={enabled ? 'enabled' : 'disabled'}>
			{enabled ? '✓' : '✗'}
		</span>
	</div>
);

interface ThemeProps {
	name: string;
	isDark: boolean;
}


//  * ThemeExample component that showcases different VS Code theme elements
//  * @param props - Component properties
//  * @returns JSX element demonstrating theme features

const ThemeExample: React.FC<ThemeProps> = ({ name, isDark }) => {
	// State management example
	const [counter, setCounter] = useState<number>(0);
	const [features, setFeatures] = useState([
		{ name: 'Syntax Highlighting', enabled: true },
		{ name: 'IntelliSense', enabled: true },
		{ name: 'Debug Console', enabled: false },
	]);

	// Constants and variables with different types
	const THEME_VERSION = '1.0.0';
	let dynamicValue = 'Hello Theme';

	// Side effect example
	useEffect(() => {
		console.log('Theme component mounted');
		return () => {
			console.log('Theme component unmounted');
		};
	}, []);

	// Example method with string manipulation
	const formatThemeName = (themeName: string): string => {
		return `${themeName} ${isDark ? '(Dark)' : '(Light)'}`;
	};

	return (
		<div className={`theme-container ${isDark ? 'dark' : 'light'}`}>
			<ThemeHeader title="VS Code Theme Example" />
			
			{isDark && <span className="theme-badge">Dark Theme Active</span>}

			<div className="theme-content">
				<p>Theme Name: {formatThemeName(name)}</p>
				<p>Version: {THEME_VERSION}</p>
				
				<button 
					onClick={() => setCounter(prev => prev + 1)}
					className="theme-button"
				>
					Clicked: {counter} times
				</button>

				<div className="features-list">
					<h3>Features</h3>
					{features.map((feature, index) => (
						<ThemeFeature
							key={index}
							name={feature.name}
							enabled={feature.enabled}
						/>
					))}
				</div>
				<ul>
					{['Syntax', 'Colors', 'Highlights'].map((feature, index) => (
						<li key={index}>{feature} Preview</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ThemeExample; */