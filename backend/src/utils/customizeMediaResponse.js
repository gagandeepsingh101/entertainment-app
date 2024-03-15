// Function to customize media data
export const customizeMediaData = (mediaData, mediaType = undefined) => {
	return mediaData.map((media) => ({
		id: media.id,
		title: media.name || media.title, // Use name for TV shows and title for movies
		image: media.poster_path, // Poster path for media image
		isAdult: media.adult, // Indicates if media is for adults
		mediaType: mediaType === undefined ? media.media_type : mediaType, // Media type (movie, tv, etc.)
		releaseDate: media.release_date || media.first_air_date, // Release date for movies or first air date for TV shows
	}));
};

// Function to customize detail data for a single media item
export const customizeDetailSingleMediaData = (
	mediaData,
	cast = [], // Default to an empty array for cast
	mediaType
) => {
	return {
		mediaData: {
			id: mediaData.id,
			title: mediaData.title || mediaData.name, // Use title for movies and name for TV shows
			overview: mediaData.overview, // Overview of the media item
			image: mediaData.poster_path, // Poster path for media image
			isAdult: mediaData.adult, // Indicates if media is for adults
			rating: mediaData.vote_average / 2, // Calculate rating from vote_average
			status: mediaData.status, // Status of the media item
			runtime: mediaData.runtime, // Runtime of the media item
			genres: mediaData.genres.map((genre) => genre.name), // List of genres
			tagline: mediaData.tagline, // Tagline of the media item
			imdb_id: mediaData.imdb_id, // IMDb ID of the media item
			homepage: mediaData.homepage, // Homepage URL of the media item
			language: mediaData.spoken_languages.map(
				(language) => language.english_name
			), // List of spoken languages
			...(mediaType === "tv" && {
				// Add additional TV-specific fields
				first_air_date: mediaData.first_air_date, // First air date of the TV show
				last_air_date: mediaData.last_air_date, // Last air date of the TV show
			}),
			...(mediaType === "movie" && {
				// Add additional movie-specific fields
				release_date: mediaData.release_date, // Release date of the movie
			}),
		},
		cast: cast.map((castData) => castData.name),
		// List of cast members' names
	};
};
