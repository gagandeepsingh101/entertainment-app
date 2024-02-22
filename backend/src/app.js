import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import bookmarkRouter from "./routes/bookmark.routes.js";
import mediaRouter from "./routes/media.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/", userRouter);
app.use("/api/", bookmarkRouter);    
app.use("/api/",mediaRouter)

export default app;
