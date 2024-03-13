export const setCookie = (key, value, days) => {
	// Create a new Date object
	const date = new Date();
	// Calculate the expiration time by adding the provided number of days to the current time
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	// Format the expiration date string
	const expires = "; expires=" + date.toUTCString();
	// Set the cookie with the provided key, value, expiration date, and path
	document.cookie = key + "=" + (value || "") + expires + "; path=/";
};
