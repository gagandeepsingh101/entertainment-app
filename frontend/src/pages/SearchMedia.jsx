import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import { useSearchMultiMedia } from "../service/tmdb.service";
import { DNA } from "react-loader-spinner";
import { useSelector } from "react-redux";

const SearchMedia = () => {
	// Get parameters from URL
	const { mediaType, searchQuery } = useParams();

	// State to store search results and loading state
	const [mediaData, setMediaData] = useState(null);
	const [loading, setLoading] = useState(true);

	// Fetch search results using custom hook
	const searchMediaData = useSearchMultiMedia;

	// Get pathname from current location
	const { pathname } = useLocation();

	// Get bookmarked data from Redux store
	const bookmarkedData = useSelector((state) => state.bookmark.bookmarks);

	useEffect(() => {
		// Reset state and show loading spinner
		setMediaData(null);
		setLoading(true);

		// Delay fetching data for demonstration purposes
		setTimeout(() => {
			if (searchQuery) {
				if (pathname.includes("bookmarks")) {
					// Filter bookmarked data based on search query if on bookmarks page
					setMediaData(
						bookmarkedData.filter((bookmark) =>
							bookmark.title.toLowerCase().includes(searchQuery.toLowerCase())
						)
					);
				} else {
					// Fetch search results using useSearchMultiMedia
					searchMediaData(
						searchQuery,
						(data) => {
							setMediaData(data);
						},
						mediaType
					);
				}
				// Set loading state to false after fetching data
				setLoading(false);
			}
		}, 2000); // 2-second delay for demonstration
	}, [searchQuery, mediaType, searchMediaData, pathname, bookmarkedData]);

	// Render search results or loading spinner
	return (
		<>
			{loading ? ( // If loading, show loading spinner
				<div className="w-full h-4/5 flex items-center justify-center">
					<DNA height={100} width={100} />
				</div>
			) : (
				<>
					{mediaData && mediaData.length > 0 ? ( // If search results found, render them
						<>
							<p className="text-HeadingM font-light mb-2 md:font-normal lg:text-HeadingL lg:font-light lg:mt-5">
								Find{" "}
								{`${mediaData && mediaData.length === 14 ? "top" : ""} ${
									mediaData && mediaData.length
								} results on '${searchQuery}'`}
							</p>
							<div className="w-full h-5/6 flex flex-wrap">
								{mediaData.map((mediaInfo) => (
									<div
										key={mediaInfo.id}
										className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5">
										{/* Render SingleCard component for each search result */}
										<SingleCard
											mediaData={mediaInfo}
											mediaType={mediaType}
											fieldType={
												pathname.includes("bookmarks")
													? "bookmarks"
													: "search " + mediaType + " data"
											}
										/>
									</div>
								))}
							</div>
						</>
					) : (
						// If no search results found, display appropriate message
						<p className="text-HeadingM font-light mb-2 md:font-normal lg:text-HeadingL lg:font-light lg:mt-5">
							No Search Found
						</p>
					)}
				</>
			)}
		</>
	);
};

export default SearchMedia;
