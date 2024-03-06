import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<div className="bg-leanBlue h-screen w-screen overflow-y-scroll flex flex-col overflow-x-hidden items-center justify-evenly py-2 text-white lg:flex-row">
			<Toaster />
			<Header />
			<div className="w-11/12 h-screen flex items-center justify-center flex-wrap ">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
