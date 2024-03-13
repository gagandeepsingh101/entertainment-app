// URLs for different types of media endpoints
export const trendingMultiMedia =
	"https://api.themoviedb.org/3/trending/all/day?language=en-US&page=";
export const discoverMovieMedia =
	"https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&certification_country=US&certification=R&page=";
export const discoverTvMedia =
	"https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
export const searchMultiMedia =
	"https://api.themoviedb.org/3/search/multi?query=query_Text&include_adult=true&language=en-US";
export const searchMovieMedia =
	"https://api.themoviedb.org/3/search/movie?query=query_Text&include_adult=true&language=en-US";
export const searchTvMedia =
	"https://api.themoviedb.org/3/search/tv?query=query_Text&include_adult=true&language=en-US";
export const detailMovieMedia =
	"https://api.themoviedb.org/3/movie/movie_id?append_to_response=20&language=en-US";
export const detailTvMedia =
	"https://api.themoviedb.org/3/tv/series_id?append_to_response=20&language=en-US";
export const castMovieMedia =
	"https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US";
export const castTvMedia =
	"https://api.themoviedb.org/3/tv/series_id/credits?language=en-US";
