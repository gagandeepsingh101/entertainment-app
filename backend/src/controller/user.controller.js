import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/UserModel.model.js";

// Controller for user registration
export const registerController = async function (req, res) {
	try {
		const { email, password } = req.body;

		// Check if email or password is missing
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "Provide your email address and password",
			});
		}

		// Check if user already exists with the provided email
		const user = await User.findOne({ email });
		if (user) {
			return res.status(409).json({
				success: false,
				message: "User already exists with your email address",
			});
		}

		// Hash the password before saving
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			email: email,
			password: hashedPassword,
		});
		await newUser.save();
		res
			.status(201)
			.json({ success: true, message: "User Registration successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

// Controller for user login
export const loginController = async function (req, res) {
	try {
		const { email, password } = req.body;

		// Check if email or password is missing
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "Provide your email address and password",
			});
		}

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "Please register user with this email address",
			});
		}

		// Compare hashed passwords
		const hasEqualPassword = await bcrypt.compare(password, user.password);
		if (!hasEqualPassword) {
			return res.status(401).json({
				success: false,
				message: "Invalid password or email address provided",
			});
		}

		// Generate JWT token
		const jwkToken = jwt.sign({ email: email }, process.env.SECRET_TOKEN);
		res.cookie("UserAuth", jwkToken).status(200).json({
			success: true,
			message: "User Login successfully",
			loginToken: jwkToken,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

// Controller to get user details
export const userDetailController = async function (req, res) {
	try {
		const { email } = req.body;

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		// Return user details
		res.status(200).json({ success: true, message: user });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

// Controller for user logout
export const logOutController = async function (req, res) {
	try {
		// Clear user authentication cookie
		res
			.clearCookie("UserAuth")
			.status(200)
			.json({ success: true, message: "User Logout Successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};
