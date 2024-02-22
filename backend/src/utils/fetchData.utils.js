import axios from 'axios';
export const fetchData = async (url, params) => {
	try {
		const { data } = await axios.get(url, {
			params,
			headers: {
				"Content-Type": "application/json",
				Authorization: process.env.TMDB_TOKEN,
			},
		});
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
