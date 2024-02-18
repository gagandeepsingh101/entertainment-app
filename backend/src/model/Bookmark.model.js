import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
	user: {
		type: String,
	},
	mediaId: {
		type: String,
		required: [true, "Please provide a media id"],
		unique: true,
	},
	mediaType: {
		type: String,
		required: [true, "Please provide a media type"],
	},
	image: {
		type: String,
		required: [true, "Please provide a media poster image"],
	},
	title: {
		type: String,
		required: [true, "Please provide a media title"],
	},
	releaseDate: {
		type: String,
		required: [true, "Please provide a media release date"],
	},
	isAdult: {
		type: Boolean,
		required: [true, "Please provide a media is for Adult or not"],
	},
});

export const Bookmarks = mongoose.model("Bookmarks", bookmarkSchema);
