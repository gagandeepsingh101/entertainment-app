import { customizeMediaData } from "../utils/customizeMediaResponse.js";
import { fetchData } from "../utils/fetchData.utils.js";

import {
	discoverMovieMedia,
	discoverTvMedia,
	trendingMultiMedia,
} from "../utils/medialUrlsConstant.utils.js";

// Controller function for retrieving trending media
export const trendingMultiMediaController = async (req, res) => {
	try {
		// Extract page number from request parameters
		const { page } = req.params;

		// Fetch trending media data for the specified page
		const data = await fetchData(trendingMultiMedia + page);

		// Responding with transformed data
		res.status(200).json({
			success: true,
			data: customizeMediaData(data.results),
			totalPages: data.total_pages,
		});
	} catch (error) {
		// Handle errors
		console.error("Error in trendingMultiMediaController:", error);
		res.status(500).json({
			success: false,
			error: "Internal server error in trendingMultiMediaController",
		});
	}
};

// Controller function for discovering movies
export const discoverMovieController = async (req, res) => {
	try {
		// Extract page number from request parameters
		const { page } = req.params;

		// Fetch movie discovery data for the specified page
		const data = await fetchData(discoverMovieMedia + page);

		// Responding with transformed data
		res.json({
			success: true,
			data: customizeMediaData(data.results, "movie"),
			totalPages: data.total_pages,
		});
	} catch (error) {
		// Handle errors
		console.error("Error in discoverMovieController:", error);
		res.status(500).json({
			success: false,
			error: "Internal server error in discoverMovieController",
		});
	}
};

// Controller function for discovering TV shows
export const discoverTvController = async (req, res) => {
	try {
		// Extract page number from request parameters
		const { page } = req.params;

		// Fetch TV show discovery data for the specified page
		const data = await fetchData(discoverTvMedia + page);

		// Responding with transformed data
		res.json({
			success: true,
			data: customizeMediaData(data.results, "tv"),
			totalPages: data.total_pages,
		});
	} catch (error) {
		// Handle errors
		console.error("Error in discoverTvController:", error);
		res.status(500).json({
			success: false,
			error: "Internal server error in discoverTvController",
		});
	}
};
