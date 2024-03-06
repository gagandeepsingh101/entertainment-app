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
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/movie",
				element: <Movie />,
			},
			{
				path: "/tv",
				element: <Tv />,
			},
			{
				path: "/bookmarks",
				element: <Bookmarks />,
			},
		],
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
