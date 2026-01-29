/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
			},
			fontWeight: {
				normal: "400",
				medium: "500",
				semibold: "600",
			},
			colors: {
				surface: {
					DEFAULT: "#fafafa",
					dark: "#0a0a0a",
				},
			},
		},
	},
	plugins: [],
};
