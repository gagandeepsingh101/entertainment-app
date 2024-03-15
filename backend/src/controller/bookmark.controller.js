import { Bookmarks } from "../model/Bookmark.model.js";

// Controller function to add a new bookmark
export const addBookmarkController = async function (req, res) {
	try {
		const { mediaData, email } = req.body;

		// Check if the bookmark already exists
		const existingBookmark = await Bookmarks.findOne({
			mediaId: mediaData.id,
			user: email,
		});
		console.log(existingBookmark);
		if (existingBookmark) {
			return res.status(203).json({
				success: false,
				message: "Bookmark already exists",
			});
		}

		// Create a new bookmark
		const newBookmark = new Bookmarks({
			user: email,
			mediaId: mediaData.id,
			mediaType: mediaData.mediaType,
			image: mediaData.image,
			title: mediaData.title,
			releaseDate: mediaData.releaseDate,
			isAdult: mediaData.isAdult,
		});

		// Save the new bookmark
		await newBookmark.save();

		// Respond with success message
		res.status(200).json({
			success: true,
			message: "Bookmark added successfully",
		});
	} catch (error) {
		// Respond with error message if an error occurs
		res.status(500).json({
			success: false,
			message: "Error saving bookmark : " + error.message,
		});
	}
};

// Controller function to delete a bookmark
export const deleteBookmarkController = async function (req, res) {
	try {
		const { mediaId } = req.params;
		const { email } = req.body;

		// Check if movieId is provided
		if (!mediaId) {
			return res.status(404).json({
				success: false,
				message: "Please provide mediaId in url parameters",
			});
		}

		// Find and delete the bookmark
		await Bookmarks.findOneAndDelete({
			mediaId: mediaId,
			user: email,
		});

		// Respond with success message
		res.status(200).json({
			success: true,
			message: "Bookmark deleted successfully",
		});
	} catch (error) {
		// Respond with error message if an error occurs
		res.status(500).json({
			success: false,
			message: "Error deleting bookmark : " + error.message,
		});
	}
};

// Controller function to fetch user bookmarks
export const fetchUserBookmarkController = async function (req, res) {
	try {
		const { email } = req.body;

		// Find bookmarks associated with the user and exclude some fields (_id, __v, user)
		const bookmarksData = await Bookmarks.find(
			{ user: email },
			{ _id: 0, __v: 0, user: 0 }
		);

		// Respond with success and bookmark data
		res.status(200).json({
			success: true,
			message: "Fetched all bookmarks data successfully",
			data: bookmarksData,
		});
	} catch (error) {
		// Respond with error message if an error occurs
		res.status(500).json({
			success: false,
			message: "Error fetching bookmark : " + error.message,
		});
	}
};
