/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Inter var", "ui-sans-serif", "system-ui,sans-serif", "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
		},
		extend: {
			colors: {
				peeling: '#e05b49'
			}
		},
	},
	plugins: [],
}
