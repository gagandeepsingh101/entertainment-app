import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import { useFetchMultiMedia } from "../service/tmdb.service";
import { DNA } from "react-loader-spinner";

const Tv = () => {
	// Fetching TV series using a custom hook
	const fetchTvSeries = useFetchMultiMedia;
	const [mediaData, setMediaData] = useState(null);

	useEffect(() => {
		// Using setTimeout to simulate loading delay for demonstration purposes
		setTimeout(() => {
			// Fetch TV series data when component mounts
			fetchTvSeries(1, setMediaData, "tv");
		}, 2000); // Simulated delay of 2000 milliseconds (2 seconds)
	}, [fetchTvSeries]); // useEffect will re-run if fetchTvSeries function changes

	return (
		<>
			{/* Conditional rendering based on whether mediaData is available */}
			{mediaData ? (
				<>
					{/* Heading for the section */}
					<p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
						Tv Series
					</p>
					{/* Displaying fetched media data */}
					<div className="w-full h-5/6 flex flex-wrap items-center   ">
						{mediaData.map((mediaInfo) => (
							// Looping through mediaData to render SingleCard components
							<div
								key={mediaInfo.id}
								className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5">
								<SingleCard mediaData={mediaInfo} fieldType={"movie"} />
							</div>
						))}
					</div>
				</>
			) : (
				// Display a loading spinner while data is being fetched
				<div className="w-full h-4/5 flex items-center justify-center">
					<DNA height={100} width={100} />
				</div>
			)}
		</>
	);
};

export default Tv;
