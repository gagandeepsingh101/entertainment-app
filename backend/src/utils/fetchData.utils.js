import axios from "axios";

// Function to fetch data from a given URL
export const fetchData = async (url, params) => {
	try {
		// Make a GET request to the provided URL
		const { data } = await axios.get(url, {
			params,
			headers: {
				"Content-Type": "application/json",
				Authorization: process.env.TMDB_TOKEN, // Include TMDB token in headers
			},
		});
		return data; // Return the fetched data
	} catch (error) {
		// Handle errors if any occur
		console.error("Error fetching data:", error);
		throw error; // Throw the error for further handling
	}
};
