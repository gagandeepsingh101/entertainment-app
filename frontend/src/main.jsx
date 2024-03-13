import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Bookmarks from "./pages/Bookmarks.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Movie from "./pages/Movie.jsx";
import SignUp from "./pages/SignUp.jsx";
import Tv from "./pages/Tv.jsx";
import SearchMedia from "./pages/SearchMedia.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import TvDetail from "./pages/TvDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// Create browser router configuration
const router = createBrowserRouter([
	{
		path: "/", // Root path
		element: <App />, // Render the App component
		children: [
			{
				path: "/", // Home page and search media route
				children: [
					{
						path: "/", // Home page route
						element: <Home />,
					},
					{
						path: "/search/:mediaType/:searchQuery", // Search media route
						element: <SearchMedia />,
					},
				],
			},
			{
				path: "/movie", // Movie routes
				children: [
					{
						path: "/movie", // Movie home route
						element: <Movie />,
					},
					{
						path: "/movie/search/:mediaType/:searchQuery", // Movie search route
						element: <SearchMedia />,
					},
				],
			},
			{
				path: "/tv", // TV routes
				children: [
					{
						path: "/tv", // TV home route
						element: <Tv />,
					},
					{
						path: "/tv/search/:mediaType/:searchQuery", // TV search route
						element: <SearchMedia />,
					},
				],
			},
			{
				path: "/bookmarks", // Bookmarks routes
				children: [
					{
						path: "/bookmarks", // Bookmarks home route
						element: <Bookmarks />,
					},
					{
						path: "/bookmarks/search/:mediaType/:?searchQuery", // Bookmarks search route
						element: <SearchMedia />,
					},
				],
			},
		],
	},
	{
		path: "/signup", // Sign up route
		element: <SignUp />,
	},
	{
		path: "/login", // Login route
		element: <Login />,
	},
	{
		path: "/movie/:mediaId", // Movie detail route
		element: <MovieDetail />,
	},
	{
		path: "/tv/:mediaId", // TV detail route
		element: <TvDetail />,
	},
]);

// Render the application with Redux store and router provider
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
