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
			keyframes: {
				slide_out: {
					'0%': {
						left: '0',
					},
					'100%': {
						left: '-100%',
					},
				},
				slide_back_out: {
					'0%': {
						left: '100%',
					},
					'100%': {
						left: '0',
					},
				},
				slide_in: {
					'0%': {
						left: '100%',
					},
					'100%': {
						left: '0',
					},
				},
				slide_back_in: {
					'0%': {
						left: '-100%',
					},
					'100%': {
						left: '0',
					},
				},
			},
			animation: {
				slide_out: 'slide_out 1s ease-in-out 1 forwards',
				slide_back_out: 'slide_back_out 1s ease-in-out 1 forwards',
				slide_in: 'slide_in 1s ease-in-out 1 forwards',
				slide_back_in: 'slide_back_in 1s ease-in-out 1 forwards',
			},
		},
	},
	plugins: [],
};
