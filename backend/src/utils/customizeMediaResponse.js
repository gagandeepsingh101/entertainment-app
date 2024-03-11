export const customizeMediaData = (mediaData, mediaType = undefined) => {
	return mediaData.map((media) => ({
		id: media.id,
		title: media.name || media.title,
		image: media.poster_path,
		isAdult: media.adult,
		rating: media.vote_average / 3,
		mediaType: mediaType === undefined ? media.media_type : mediaType,
		releaseDate: media.release_date || media.first_air_date,
	}));
};

export const customizeDetailSingleMediaData = (
	mediaData,
	cast = [],
	mediaType
) => {
	return {
		mediaData: {
			id: mediaData.id,
			title: mediaData.title || mediaData.original_name,
			overview: mediaData.overview,
			image: mediaData.poster_path,
			isAdult: mediaData.adult,
			rating: mediaData.vote_average / 2,
			status: mediaData.status,
			runtime: mediaData.runtime,
			genres: mediaData.genres.map((genre) => genre.name),
			tagline: mediaData.tagline,
			imdb_id: mediaData.imdb_id,
			homepage: mediaData.homepage,
			language: mediaData.spoken_languages.map(
				(language) => language.english_name
			),
			...(mediaType === "tv" && {
				first_air_date: mediaData.first_air_date,
				last_air_date: mediaData.last_air_date,
			}),
			...(mediaType === "movie" && {
				release_date: mediaData.release_date,
			}),
		},
		cast: cast.map((castData) => castData.name),
	};
};
