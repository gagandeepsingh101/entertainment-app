// Import necessary modules
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

// Import routers
import userRouter from "./routes/user.routes.js";
import bookmarkRouter from "./routes/bookmark.routes.js";
import mediaRouter from "./routes/media.routes.js";

// Create Express app instance
const app = express();

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded requests
app.use(cookieParser()); // Parse cookies from incoming requests
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Routes setup
app.use("/api/", userRouter); // Mount userRouter at /api/user
app.use("/api/", bookmarkRouter); // Mount bookmarkRouter at /api/bookmark
app.use("/api/", mediaRouter); // Mount mediaRouter at /api/media

// Export the app instance
export default app;
