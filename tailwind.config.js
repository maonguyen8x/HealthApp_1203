/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    	"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					sm: '600px',
					md: '728px',
					lg: '984px',
					xl: '1240px',
					'2xl': '1240px',
				},
			},
			boxShadow: {
				circle: '0px 0px 6px #FC7400;',
			},
			colors: {
				// Use this tool for set name color
				// https://chir.ag/projects/name-that-color
				default: '#2E2E2E',
				yellow: '#FFCC21',
				orange: '#FF963C',
				orange2: '#EA6C00',
				turquoise: '#8FE9D0',
				gray1: '#414141',
				gray2: '#777777',
				gray3: '#707070',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}