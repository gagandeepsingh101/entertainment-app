import express from "express";
import {
    logOutController,
    loginController,
    registerController,
    userDetailController,
} from "../controller/user.controller.js";
import { verifyToken } from "../middleware/verfiyToken.middleware.js";

const userRouter = express.Router();

// Route to register a new user
userRouter.post("/user/register", registerController);

// Route to login
userRouter.post("/user/login", loginController);

// Route to get user details (requires token verification)
userRouter.get("/user/details", verifyToken, userDetailController);

// Route to log out (requires token verification)
userRouter.get("/user/logout", verifyToken, logOutController);

export default userRouter;
