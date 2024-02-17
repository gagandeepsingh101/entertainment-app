import app from "./src/app.js";
import { config } from "dotenv";
import { connectDB } from "./src/db/connectDb.js";

config();
connectDB();

app.listen(8000, (req, res) => {
	console.log("Server running on url: http://localhost:" + 8000);
});
