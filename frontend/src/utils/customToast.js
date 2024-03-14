import toast from "react-hot-toast";

export const successToast = (message) =>
	toast.success(message, {
		style: {
			border: "1px solid #FC4747",
			padding: "16px",
			color: "#FC4747",
			backgroundColor: "#10141E",
		},
		iconTheme: {
			primary: "#161D2F",
			secondary: "#5A698F",
		},
	});

export const errorToast = (message) =>
	toast.error(message, {
		style: {
			border: "1px solid #FC4747",
			padding: "16px",
			color: "#FC4747",
			backgroundColor: "#10141E",
		},
		iconTheme: {
			primary: "#161D2F",
			secondary: "#5A698F",
		},
	});
