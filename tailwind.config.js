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
				menu: '5px 1px 12px rgba(0, 0, 0, 0.1)',
				input: '7px 7px 25px rgba(0, 139, 255, 0.15)',
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