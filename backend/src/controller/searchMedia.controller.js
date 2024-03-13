import { customizeMediaData } from "../utils/customizeMediaResponse.js";
import { fetchData } from "../utils/fetchData.utils.js";

import {
	searchMovieMedia,
	searchMultiMedia,
	searchTvMedia,
} from "../utils/medialUrlsConstant.utils.js";

// Controller function for searching for various media types
export const searchMultiController = async (req, res) => {
	try {
		// Extract search query from request parameters
		const { searchQuery } = req.params;

		// Fetch search results for multi media type
		const data = await fetchData(
			searchMultiMedia.replace("query_Text", searchQuery.toString())
		);

		// If no results found, respond with 204 status code
		if (data.results.length === 0) {
			return res.status(204).json({
				success: false,
				message: "Page Not Found",
			});
		}

		// Responding with transformed data
		res.json({
			success: true,
			data: customizeMediaData(data.results.slice(0, 14)),
		});
	} catch (error) {
		// Handle errors
		console.error("Error in searchMultiController:", error);
		res.status(500).json({
			success: false,
			error: "Internal server error in searchMultiController",
		});
	}
};

// Controller function for searching for movies
export const searchMovieController = async (req, res) => {
	try {
		// Extract search query from request parameters
		const { searchQuery } = req.params;

		// Fetch search results for movies
		const data = await fetchData(
			searchMovieMedia.replace("query_Text", searchQuery.toString())
		);

		// If no results found, respond with 204 status code
		if (data.results.length === 0) {
			return res.status(204).json({
				success: false,
				message: "Page Not Found",
			});
		}

		// Responding with transformed data
		res.json({
			success: true,
			data: customizeMediaData(data.results.slice(0, 14), "movie"),
		});
	} catch (error) {
		// Handle errors
		console.error("Error in searchMovieController:", error);
		res.status(500).json({
			success: false,
			error: "Internal server error in searchMovieController",
		});
	}
};

// Controller function for searching for TV shows
export const searchTvController = async (req, res) => {
	try {
		// Extract search query from request parameters
		const { searchQuery } = req.params;

		// Fetch search results for TV shows
		const data = await fetchData(
			searchTvMedia.replace("query_Text", searchQuery.toString())
		);

		// If no results found, respond with 204 status code
		if (data.results.length === 0) {
			return res.status(204).json({
				success: false,
				message: "Page Not Found",
			});
		}

		// Responding with transformed data
		res.json({
			success: true,
			data: customizeMediaData(data.results.slice(0, 14)),
		});
	} catch (error) {
		// Handle errors
		console.error("Error in searchTvController:", error);
		res.status(500).json({
			success: false,
			error: "Internal server error in searchTvController",
		});
	}
};
