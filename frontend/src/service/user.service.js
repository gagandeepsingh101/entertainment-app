import axios from "axios";
import { userActionUrl } from "../utils/constant.utils";
import { setCookie } from "../utils/cookieAction.utils";
import toast from "react-hot-toast";
import { successToast } from "../utils/customSuccessToast";

// Register a new user
export const registerUser = async (userData) => {
	try {
		// Send a POST request to register endpoint
		const { data } = await axios.post(
			`${userActionUrl}/register`,
			{
				email: userData.email,
				password: userData.password,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: document.cookie,
				},
			}
		);
		// Display success message
		successToast(data.message);
	} catch (error) {
		// Log error if registration fails
		console.error("Error registering user:", error.message);
	}
};

// Login an existing user
export const loginUser = async (userData) => {
	try {
		// Send a POST request to login endpoint
		const { data } = await axios.post(
			`${userActionUrl}/login`,
			{
				email: userData.email,
				password: userData.password,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		// Set user authentication token in cookie
		setCookie("UserAuth", data.loginToken, 7);
		// Display success message
		successToast(data.message);
	} catch (error) {
		// Log error if login fails
		console.error("Error logging in user:", error.message);
	}
};

// Logout the current user
export const logoutUser = async () => {
	try {
		// Send a GET request to logout endpoint
		const { data } = await axios.get(`${userActionUrl}/logout`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: document.cookie,
			},
		});
		// Clear user authentication token from cookie
		setCookie("UserAuth", document.cookie.split("=")[1], 0);
		// Display success message
		successToast(data.message);
	} catch (error) {
		console.log(error)
		// Log error if logout fails
		console.error("Error logging out user:", error.message);
	}
};
