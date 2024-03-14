import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { fetchUserBookmark } from "./store/bookmarkSlice";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUserBookmark());
	}, [dispatch]);
	return (
		<div className="bg-leanBlue relative h-screen w-screen overflow-y-scroll flex flex-col overflow-x-hidden items-center justify-evenly text-white lg:flex-row scrollbar-corner-transparent scrollbar-thin  scrollbar-thumb-darkRed scrollbar-track-transparent overflow-scroll py-5  ">
			<Toaster position="top-right" reverseOrder={false} />
			<Header />
			<div className="w-11/12 h-5/6 z-40  lg:h-full  ">
				<SearchBar />
				<Outlet />
			</div>
		</div>
	);
}

export default App;
