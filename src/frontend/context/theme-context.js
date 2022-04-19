import { createContext, useContext, useState, useLayoutEffect } from "react";

const themeContext = createContext(localStorage.theme);

const useThemeContext = () => useContext(themeContext);

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(localStorage.theme);

	const colorTheme = theme === "dark" ? "light" : "dark";

	useLayoutEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, colorTheme]);

	return (
		<themeContext.Provider value={{ colorTheme, setTheme }}>
			{children}
		</themeContext.Provider>
	);
}

export { ThemeProvider, useThemeContext };
