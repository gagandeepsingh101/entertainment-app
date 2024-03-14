import axios from "axios";
import { tmdbActionUrl } from "../utils/constant.utils";

// Fetch trending media
export const useFetchTrendingMedia = async (page, setMediaData) => {
	try {
		// Fetch trending media data from TMDB API
		const { data } = await axios.get(`${tmdbActionUrl}/trending/${page}`);
		// Set fetched media data to state
		setMediaData(data.data);
	} catch (error) {
		// Log error if fetching fails
		// console.error("Error fetching trending media:", error);
	}
};

// Fetch multiple media based on type (e.g., movie, TV show)
export const useFetchMultiMedia = async (page, setMediaData, mediaType) => {
	try {
		// Fetch media data based on type and page from TMDB API
		const { data } = await axios.get(
			`${tmdbActionUrl}/discover/${mediaType}/${page}`
		);
		// Set fetched media data to state
		setMediaData(data.data);
	} catch (error) {
		// Log error if fetching fails
		// console.error("Error fetching multi-media:", error);
	}
};

// Search for media based on query and type
export const useSearchMultiMedia = async (
	searchQuery,
	setMediaData,
	mediaType
) => {
	try {
		// If both search query and media type are provided
		if (searchQuery && mediaType) {
			// Fetch media data based on query and type from TMDB API
			const { data } = await axios.get(
				`${tmdbActionUrl}/search/${mediaType}/${searchQuery}`
			);
			// Set fetched media data to state
			setMediaData(data.data);
		}
	} catch (error) {
		// Log error if fetching fails
		// console.error("Error searching multi-media:", error);
	}
};

// Fetch detailed information of a specific media
export const useFetchMediaDetail = async (
	mediaId,
	setMediaDetail,
	mediaType
) => {
	try {
		// If both media ID and media type are provided
		if (mediaId && mediaType) {
			// Fetch detailed media information based on ID and type from TMDB API
			const { data } = await axios.get(
				`${tmdbActionUrl}/detail/${mediaType}/${mediaId}`
			);
			// Set fetched media detail to state
			setMediaDetail(data.data);
		}
	} catch (error) {
		// Log error if fetching fails
		// console.error("Error fetching media detail:", error);
	}
};
