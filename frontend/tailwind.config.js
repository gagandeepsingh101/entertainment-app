/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkRed: "#FC4747",
				white: "#FFFFFF",
				waikawaGrey: "#5A698F",
				deepBlue: "#161D2F",
				leanBlue: "#10141E",
			},
			fontSize: {
				HeadingL: "32px",
				HeadingM: "24px",
				HeadingXS: "18px",
				BodyM: "15px",
				BodyS: "13px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
