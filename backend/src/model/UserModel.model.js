import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Please provide an email address"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
});

export const User = mongoose.model("User", userSchema);
