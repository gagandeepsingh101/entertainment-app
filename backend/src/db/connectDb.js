import mongoose from "mongoose";

export const connectDB = async function () {
	try {
		// Establish connection to the MongoDB database
		const connectionInstance = await mongoose.connect(process.env.MONGODB_URL + "/entertainment-app");

		// Log a successful connection message
		console.log("Database connection established on " + connectionInstance.connection.host);
	} catch (error) {
		// Log any errors that occur during connection
		console.log("Database connection error: " + error.message);
		// Terminate the application if a connection error occurs
		process.exit(1);
	}
};
