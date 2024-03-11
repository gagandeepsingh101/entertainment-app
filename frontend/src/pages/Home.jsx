import { useEffect, useState } from "react";
import { useFetchTrendingMedia } from "../service/tmdb.service";
import SingleCard from "../components/SingleCard";
import { DNA } from "react-loader-spinner";

const Home = () => {
	const fetchTrendingMedia = useFetchTrendingMedia;
	const [mediaData, setMediaData] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetchTrendingMedia(1, setMediaData);
		}, 2000);
	}, [fetchTrendingMedia]);
	return (
		<>
			{mediaData ? (
				<>
					<p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
						Trending
					</p>
					<div className="w-full h-1/3 flex items-center justify-evenly md:h-2/5 ">
						<div className="w-full h-full py-4 overflow-x-auto flex flex-nowrap scroll-smooth scrollbar-none  ">
							{mediaData.trending.map((mediaInfo) => (
								<div
									key={mediaInfo.id}
									className="w-4/5 flex-none mx-2 md:w-2/5 md:mx-4 lg:w-1/3">
									<SingleCard mediaData={mediaInfo} fieldType={"trending"} />
								</div>
							))}
						</div>
					</div>
					<p className="text-HeadingM font-light mb-2 md:font-normal lg:text-HeadingL lg:font-light lg:mt-5">
						Recommended For You
					</p>
					<div className="w-full h-5/6 flex flex-wrap items-center   ">
						{mediaData.recommended.map((mediaInfo) => (
							<div
								key={mediaInfo.id}
								className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5">
								<SingleCard mediaData={mediaInfo} fieldType={"recommended"} />
							</div>
						))}
					</div>
				</>
			) : (
				<div className="w-full h-4/5 flex items-center justify-center">
					<DNA height={100} width={100}  />
				</div>
			)}
		</>
	);
};

export default Home;
