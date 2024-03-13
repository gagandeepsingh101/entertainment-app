import { Bookmarks } from "../model/Bookmark.model.js";

export const addBookmarkController = async function (req, res) {
	try {
		const { mediaData, email } = req.body;
		const existingBookmark = await Bookmarks.findOne({ mediaId: mediaData.id });
		if (existingBookmark) {
			return res.status(203).json({
				success: false,
				message: "Bookmark already exists",
			});
		}
		const newBookmark = new Bookmarks({
			user: email,
			mediaId: mediaData.id,
			mediaType: mediaData.mediaType,
			image: mediaData.image,
			title: mediaData.title,
			releaseDate: mediaData.releaseDate,
			isAdult: mediaData.isAdult,
		});
		await newBookmark.save();
		res.status(200).json({
			success: true,
			message: "Bookmark added successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error saving bookmark : " + error.message,
		});
	}
};

export const deleteBookmarkController = async function (req, res) {
	try {
		const { movieId } = req.params;
		if (!movieId) {
			return res.status(404).json({
				success: false,
				message: "Please provide movieId in url parameters",
			});
		}
		await Bookmarks.findOneAndDelete(movieId);
		res.status(200).json({
			success: true,
			message: "Bookmark deleted successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error deleting bookmark : " + error.message,
		});
	}
};

export const fetchUserBookmarkController = async function (req, res) {
	try {
		const { email } = req.body;
		const bookmarksData = await Bookmarks.find(
			{ user: email },
			{ _id: 0, __v: 0, user: 0 }
		);
		res.status(200).json({
			success: true,
			message: "Bookmark deleted successfully",
			data: bookmarksData,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error fetching bookmark : " + error.message,
		});
	}
};
