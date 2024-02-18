import { Bookmarks } from "../model/Bookmark.model.js";

export const addBookmarkController = async function (req, res) {
    try {
        const { email, mediaId, mediatype, image, title, releaseDate, isAdult } =
            req.body;
        // if (
        //     !mediaId ||
        //     !mediatype ||
        //     !image ||
        //     !title ||
        //     !releaseDate ||
        //     !isAdult
        // ) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Please provide full media details",
        //     });
        // }
        const existingBookmark = await Bookmarks.findOne({ mediaId: mediaId });
        if (existingBookmark) {
            return res.status(203).json({
                success: false,
                message: "Bookmark already exists",
            });
        }
        const newBookmark = new Bookmarks({
            user: email,
            mediaId: mediaId,
            mediaType: mediatype,
            image: image,
            title: title,
            releaseDate: releaseDate,
            isAdult: isAdult,
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
		const bookmarksData = await Bookmarks.find({ user: email });
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
