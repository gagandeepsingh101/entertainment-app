import mongoose from "mongoose";

// Define the schema for users
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Please provide an email address"], // Validation rule: email is required
		unique: true, // Ensure email is unique
	},
	password: {
		type: String,
		required: [true, "Please provide a password"], // Validation rule: password is required
	},
});

// Create a model named "User" based on the userSchema
export const User = mongoose.model("User", userSchema);
