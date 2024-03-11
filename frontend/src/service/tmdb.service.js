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
export const useFetchMultiMedia = async (page, setMediaData, mediaTye) => {
	try {
		const { data } = await axios.get(
			`${tmdbActionUrl}/discover/${mediaTye}/${page}`
		);
		setMediaData(data.data);
	} catch (error) {
		console.error("Error fetching trending media:", error);
	}
};
export const useSearchMultiMedia = async (
	searchQuery,
	setMediaData,
	mediaType
) => {
	try {
		if (searchQuery && mediaType) {
			const { data } = await axios.get(
				`${tmdbActionUrl}/search/${mediaType}/${searchQuery}`
			);
			setMediaData(data.data);
		}
	} catch (error) {
		console.error("Error fetching trending media:", error);
	}
};
export const useFetchMediaDetail = async (
	mediaId,
	setMediaDetail,
	mediaType
) => {
	try {
		if (mediaId && mediaType) {
			const { data } = await axios.get(
				`${tmdbActionUrl}/detail/${mediaType}/${mediaId}`
			);
			setMediaDetail(data.data);
		}
	} catch (error) {
		console.error("Error fetching trending media:", error);
	}
};
