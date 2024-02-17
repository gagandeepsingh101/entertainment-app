import express from "express";
import {
    logOutController,
	loginController,
	registerController,
    userDetailController,
} from "../controller/user.controller.js";
import { verifyToken } from "../middleware/verfiyToken.middleware.js";

const userRouter = express.Router();

userRouter.post("/user/register", registerController);
userRouter.post("/user/login", loginController);
userRouter.get("/user/details", verifyToken, userDetailController);
userRouter.post("/user/logout", verifyToken, logOutController); 

export default userRouter;
