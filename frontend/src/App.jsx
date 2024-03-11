import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar";

function App() {
	return (
		<div className="bg-leanBlue relative h-screen w-screen overflow-y-scroll flex flex-col overflow-x-hidden items-center justify-evenly text-white lg:flex-row scrollbar-corner-transparent scrollbar-thin  scrollbar-thumb-darkRed scrollbar-track-transparent overflow-scroll py-5  ">
			<Toaster />
			<Header />
			<div className="w-11/12 h-5/6 z-40  lg:h-full  ">
				<SearchBar />
				<Outlet />
			</div>
		</div>
	);
}

export default App;
