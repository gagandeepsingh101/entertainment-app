import { customizeDetailSingleMediaData } from "../utils/customizeMediaResponse.js";
import { fetchData } from "../utils/fetchData.utils.js";

import {
	castMovieMedia,
	castTvMedia,
	detailMovieMedia,
	detailTvMedia,
} from "../utils/medialUrlsConstant.utils.js";

// Controller function for retrieving details of a movie
export const detailMovieController = async (req, res) => {
	try {
		// Extract movieId from request parameters
		const { movieId } = req.params;

		// Fetch movie details using movieId
		const movieData = await fetchData(
			detailMovieMedia.replace("movie_id", movieId.toString())
		);

		// Fetch cast details for the movie
		const { cast } = await fetchData(
			castMovieMedia.replace("movie_id", movieId.toString())
		);

		// Respond with transformed data
		res.json({
			success: true,
			data: customizeDetailSingleMediaData(movieData, cast, "movie"),
		});
	} catch (error) {
		// Handle errors
		if (error.response.status === 404) {
			// If movie not found, respond with 404 error
			return res.status(404).json({
				success: false,
				message: "Page Not Found",
			});
		}
		// Respond with 500 error for other errors
		res.status(500).json({
			success: false,
			error: "Internal server error in detailMovieController",
		});
	}
};

// Controller function for retrieving details of a TV show
export const detailTvController = async (req, res) => {
	try {
		// Extract seriesId from request parameters
		const { seriesId } = req.params;

		// Fetch TV show details using seriesId
		const tvData = await fetchData(
			detailTvMedia.replace("series_id", seriesId.toString())
		);

		// Fetch cast details for the TV show
		const { cast } = await fetchData(
			castTvMedia.replace("series_id", seriesId.toString())
		);

		// Respond with transformed data
		res.json({
			success: true,
			data: customizeDetailSingleMediaData(tvData, cast, "tv"),
		});
	} catch (error) {
		// Handle errors
		if (error.response.status === 404) {
			// If TV show not found, respond with 404 error
			return res.status(404).json({
				success: false,
				message: "Page Not Found",
			});
		}
		// Respond with 500 error for other errors
		res.status(500).json({
			success: false,
			error: "Internal server error in detailTvController",
		});
	}
};
