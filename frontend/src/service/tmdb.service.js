import axios from "axios";
import { tmdbActionUrl } from "../utils/constant.utils";
export const useFetchTrendingMedia = async (page, setMediaData) => {
	try {
		const { data } = await axios.get(`${tmdbActionUrl}/trending/${page}`);
		setMediaData({
			trending: data.data.slice(0, 5),
			recommended: data.data.slice(4, 20),
		});
	} catch (error) {
		console.error("Error fetching trending media:", error);
	}
};
export const useFetchMovie = async (page, setMediaData) => {
	try {
		const { data } = await axios.get(`${tmdbActionUrl}/discover/movie/${page}`);
		setMediaData(data.data);
	} catch (error) {
		console.error("Error fetching trending media:", error);
	}
};
export const useFetchTV = async (page, setMediaData) => {
	try {
		const { data } = await axios.get(`${tmdbActionUrl}/discover/tv/${page}`);
		setMediaData(data.data);
	} catch (error) {
		console.error("Error fetching trending media:", error);
	}
};
