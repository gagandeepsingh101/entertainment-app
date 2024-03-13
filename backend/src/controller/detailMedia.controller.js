import { customizeDetailSingleMediaData } from "../utils/customizeMediaResponse.js";
import { fetchData } from "../utils/fetchData.utils.js";

import {
	castMovieMedia,
	castTvMedia,
	detailMovieMedia,
	detailTvMedia,
} from "../utils/medialUrlsConstant.utils.js";
export const detailMovieController = async (req, res) => {
	try {
		const { movieId } = req.params;
		const movieData = await fetchData(
			detailMovieMedia.replace("movie_id", movieId.toString())
		);
		const { cast } = await fetchData(
			castMovieMedia.replace("movie_id", movieId.toString())
		);
		// Responding with transformed data
		res.json({
			success: true,
			data: customizeDetailSingleMediaData(movieData, cast, "movie"),
		});
	} catch (error) {
		// console.error("Error in detailMovieController:", error.response);
		if (error.response.status === 404) {
			return res.status(404).json({
				success: false,
				message: "Page Not Found",
			});
		}
		res.status(500).json({
			success: false,
			error: "Internal server error in detailMovieController",
		});
	}
};

// Controller function for retrieving details of a TV show
export const detailTvController = async (req, res) => {
	try {
		const { seriesId } = req.params;
		const tvData = await fetchData(
			detailTvMedia.replace("series_id", seriesId.toString())
		);
		const { cast } = await fetchData(
			castTvMedia.replace("series_id", seriesId.toString())
		);

		// Responding with transformed data
		res.json({
			success: true,
			data: customizeDetailSingleMediaData(tvData, cast, "tv"),
		});
	} catch (error) {
		// console.error("Error in detailTvController:", error);
		if (error.response.status === 404) {
			return res.status(404).json({
				success: false,
				message: "Page Not Found",
			});
		}
		res.status(500).json({
			success: false,
			error: "Internal server error in detailTvController",
		});
	}
};
