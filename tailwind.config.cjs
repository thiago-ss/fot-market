/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				nunito: ["Nunito", "sans-serif"],
			},
			backgroundImage: {
				hero: "url('/hero-image.png')",
			},
		},
		plugins: [require("flowbite/plugin")],
		screens: {
			sm: { max: "374.99px" },

			md: { min: "375px", max: "767px" },

			lg: { min: "767.01px", max: "1025px" },

			xl: { min: "1025.01px", max: "1535px" },

			"2xl": { min: "1536px" },
		},
	},
};
