import { useEffect, useState } from "react";
import { useFetchMultiMedia } from "../service/tmdb.service";
import SingleCard from "../components/SingleCard";
import { DNA } from "react-loader-spinner";

const Movie = () => {
	// Fetch movie data using custom hook
	const fetchMovie = useFetchMultiMedia;

	// State to store fetched media data
	const [mediaData, setMediaData] = useState(null);

	// Fetch movie data when component mounts
	useEffect(() => {
		// Delay fetch by 2000 milliseconds (2 seconds) for demonstration purposes
		setTimeout(() => {
			fetchMovie(1, setMediaData, "movie"); // Fetch movie data with page 1 and type "movie"
		}, 2000);
	}, [fetchMovie]); // Dependency array ensures effect runs only once after mount

	// Render Movie component
	return (
		<>
			{mediaData ? ( // If mediaData is available, render movie cards
				<>
					<p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
						Movie
					</p>
					<div className="w-full h-5/6 flex flex-wrap items-center">
						{/* Map through mediaData and render SingleCard component for each */}
						{mediaData.map((mediaInfo) => (
							<div
								key={mediaInfo.id}
								className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5">
								<SingleCard mediaData={mediaInfo} fieldType={"movie"} />
							</div>
						))}
					</div>
				</>
			) : (
				// If mediaData is not available, render loading spinner
				<div className="w-full h-4/5 flex items-center justify-center">
					<DNA height={100} width={100} />
				</div>
			)}
		</>
	);
};

export default Movie;
