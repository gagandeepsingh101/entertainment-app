import { useEffect, useState } from "react";
import { useFetchTrendingMedia } from "../service/tmdb.service";
import SingleCard from "../components/SingleCard";
import { DNA } from "react-loader-spinner";

const Home = () => {
	// Fetch trending media hook
	const fetchTrendingMedia = useFetchTrendingMedia;

	// State variables to hold trending and recommended media data
	const [trendingData, setTrendingData] = useState(null);
	const [recommendedData, setrecommendedData] = useState(null);

	// Fetch trending and recommended media after 2 seconds of component mount
	useEffect(() => {
		setTimeout(() => {
			// Fetch trending media
			fetchTrendingMedia(1, setTrendingData);
			// Fetch recommended media
			fetchTrendingMedia(2, setrecommendedData);
		}, 2000);
	}, [fetchTrendingMedia]); // Dependency array with fetchTrendingMedia ensures useEffect runs only when fetchTrendingMedia changes

	return (
		<>
			{/* Conditional rendering based on availability of trendingData and recommendedData */}
			{trendingData && recommendedData ? (
				<>
					{/* Trending media section */}
					<p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
						Trending
					</p>
					<div className="w-full h-1/3 flex items-center justify-evenly md:h-2/5 ">
						<div className="w-full h-full py-4 overflow-x-auto flex flex-nowrap scroll-smooth scrollbar-none  ">
							{/* Mapping over trendingData to render SingleCard components */}
							{trendingData?.map((mediaInfo) => (
								<div
									key={mediaInfo.id}
									className="w-4/5 flex-none mx-2 md:w-2/5 md:mx-4 lg:w-1/3">
									<SingleCard mediaData={mediaInfo} fieldType={"trending"} />
								</div>
							))}
						</div>
					</div>

					{/* Recommended media section */}
					<p className="text-HeadingM font-light mb-2 md:font-normal lg:text-HeadingL lg:font-light lg:mt-5">
						Recommended For You
					</p>
					<div className="w-full h-5/6 flex flex-wrap items-center   ">
						{/* Mapping over recommendedData to render SingleCard components */}
						{recommendedData?.map((mediaInfo) => (
							<div
								key={mediaInfo.id}
								className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5">
								<SingleCard mediaData={mediaInfo} fieldType={"recommended"} />
							</div>
						))}
					</div>
				</>
			) : (
				// Loading spinner when data is being fetched
				<div className="w-full h-4/5 flex items-center justify-center">
					<DNA height={100} width={100} />
				</div>
			)}
		</>
	);
};

export default Home;
