import axios from "axios";

// Function to fetch TMDB image based on media ID and type
export const useFetchTMDBImage = async (mediaId, setPosterImage, mediaType) => {
	// Check if mediaId and mediaType are provided
	if (mediaId && mediaType) {
		try {
			// Make a GET request to TMDB API to fetch images
			const { data } = await axios.get(
				// Construct the API endpoint URL with mediaType and mediaId
				`https://api.themoviedb.org/3/${mediaType}/${mediaId}/images?api_key=${
					// Retrieve the API key from environment variables
					import.meta.env.VITE_APP_TMDB_API_KEY
				}&language=en-US&include_image_language=en,null`
			);

			// Check if data is available
			if (data) {
				// Set the poster image using the backdrop at index 1 (you might want to adjust this logic)
				setPosterImage(data?.backdrops[1]?.file_path);
			}
		} catch (error) {
			// Handle any errors occurred during the API call
			console.error("Error fetching TMDB image:", error);
		}
	}
};
