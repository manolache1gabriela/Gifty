/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: '#083c65',
				secondary: '#f98f55',
				tertiary: '#0d1321',
				quaternary: '#ffb703',
			},
		},
	},
	plugins: [],
};
