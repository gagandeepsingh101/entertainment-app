import mongoose from "mongoose";

// Define the schema for bookmarks
const bookmarkSchema = new mongoose.Schema({
	user: {
		type: String,
	},
	mediaId: {
		type: String,
		required: [true, "Please provide a media id"], // Validation rule: mediaId is required
	},
	mediaType: {
		type: String,
		required: [true, "Please provide a media type"], // Validation rule: mediaType is required
	},
	image: {
		type: String,
		required: [true, "Please provide a media poster image"], // Validation rule: image is required
	},
	title: {
		type: String,
		required: [true, "Please provide a media title"], // Validation rule: title is required
	},
	releaseDate: {
		type: String,
		required: [true, "Please provide a media release date"], // Validation rule: releaseDate is required
	},
	isAdult: {
		type: Boolean,
		required: [true, "Please provide a media is for Adult or not"], // Validation rule: isAdult is required
	},
});

// Create a model named "Bookmarks" based on the bookmarkSchema
export const Bookmarks = mongoose.model("Bookmarks", bookmarkSchema);
