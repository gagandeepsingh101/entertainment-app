import axios from "axios";
export const useFetchTMDBImage = async (mediaId, setPosterImage, mediaType) => {
	const { data } = await axios.get(
		`https://api.themoviedb.org/3/${mediaType}/${mediaId}/images?api_key=${
			import.meta.env.VITE_APP_TMDB_API_KEY
		}&language=en-US&include_image_language=en,null`
	);
	setPosterImage(data.backdrops[1].file_path)
};
