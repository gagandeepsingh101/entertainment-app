import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
	return (
		<form
			onSubmit={() => {}}
			className="w-full h-14  bg-leanBlue z-50 flex gap-3 justify-center items-center font-light text-HeadingXS  lg:justify-evenly lg:text-HeadingM lg:py-5 lg:gap-0">
			<LuSearch className=" text-xl lg:text-3xl " />
			<input
				type="search"
				name=""
				id="search"
				placeholder="Search for movies or TV series"
				className=" w-[95%] h-fit bg-transparent caret-darkRed focus:outline-none border-b-2 border-transparent focus:border-waikawaGrey lg:w-[94%] "
			/>
		</form>
	);
};

export default SearchBar;
