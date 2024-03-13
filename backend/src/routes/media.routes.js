import express from "express";
import {
	discoverMovieController,
	trendingMultiMediaController,
	discoverTvController,
} from "../controller/discoverAndTrendingMedia.controller.js";
import {
	searchMultiController,
	searchTvController,
	searchMovieController,
} from "../controller/searchMedia.controller.js";
import {
	detailMovieController,
	detailTvController,
} from "../controller/detailMedia.controller.js";

const mediaRouter = express.Router();

// Routes for trending media
mediaRouter.get("/media/trending/:page", trendingMultiMediaController);

// Routes for discovering movies and TV shows
mediaRouter.get("/media/discover/movie/:page", discoverMovieController);
mediaRouter.get("/media/discover/tv/:page", discoverTvController);

// Routes for searching movies, TV shows, and multi media
mediaRouter.get("/media/search/movie/:searchQuery", searchMovieController);
mediaRouter.get("/media/search/tv/:searchQuery", searchTvController);
mediaRouter.get("/media/search/multi/:searchQuery", searchMultiController);

// Routes for getting details of movies and TV shows
mediaRouter.get("/media/detail/movie/:movieId", detailMovieController);
mediaRouter.get("/media/detail/tv/:seriesId", detailTvController);

export default mediaRouter;
