const baseUrl = import.meta.env.VITE_APP_BASE_URL || "http://localhost:8000/api/";
export const userActionUrl = baseUrl + "user";
export const tmdbActionUrl = baseUrl + "media";
export const bookmarkActionUrl = baseUrl + "bookmark";
