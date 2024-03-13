import axios from "axios";
import { userActionUrl } from "../utils/constant.utils";
import { setCookie } from "../utils/cookieAction.utils";
import toast from "react-hot-toast";
export const registerUser = async (userData) => {
	try {
		const { data } = await axios.post(
			userActionUrl + "/register",
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
		toast.success(data.message);
	} catch (error) {
		console.log(error.message);
	}
};

export const loginUser = async (userData) => {
	try {
		const { data } = await axios.post(
			userActionUrl + "/login",
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
		// console.log(data);
		setCookie("UserAuth", data.loginToken, 7);
		toast.success(data.message);
	} catch (error) {
		console.log(error.message);
	}
};
export const logoutUser = async () => {
	try {
		const { data } = await axios.get(userActionUrl + "/logout", {
			headers: {
				"Content-Type": "application/json",
				Authorization: document.cookie,
			},
		});
		// console.log(data);
		setCookie("UserAuth", document.cookie.split("=")[1], 0);
		toast.success(data.message);
	} catch (error) {
		console.log(error);
	}
};

