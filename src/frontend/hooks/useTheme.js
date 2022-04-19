import { useState, useLayoutEffect } from "react";

function useTheme() {
	const [theme, setTheme] = useState(localStorage.theme);

	const colorTheme = theme === "dark" ? "light" : "dark";

	useLayoutEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, colorTheme]);

	return [colorTheme, setTheme];
}

export { useTheme };
