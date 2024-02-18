import express from "express";
import { verifyToken } from "../middleware/verfiyToken.middleware.js";
import {
	addBookmarkController,
	deleteBookmarkController,
	fetchUserBookmarkController,
} from "../controller/bookmark.controller.js";

const bookmarkRouter = express.Router();

bookmarkRouter.post("/bookmark/add", verifyToken, addBookmarkController);
bookmarkRouter.get("/bookmark/data", verifyToken, fetchUserBookmarkController);
bookmarkRouter.delete(
	"/bookmark/remove/:movieId",
	verifyToken,
	deleteBookmarkController
);

export default bookmarkRouter;
