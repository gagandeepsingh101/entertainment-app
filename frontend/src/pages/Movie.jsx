import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useFetchMovie } from "../service/tmdb.service";
import SingleCard from "../components/SingleCard";

const Movie = () => {
	const fetchMovie = useFetchMovie;
	const [mediaData, setMediaData] = useState(null);

	useEffect(() => {
		fetchMovie(1, setMediaData);
	}, [fetchMovie]);
	return (
		<>
			<p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
				Movie
			</p>
			<div className="w-full h-5/6 flex flex-wrap items-center   ">
				{mediaData &&
					mediaData.map((mediaInfo) => (
						<div
							key={mediaInfo.id}
							className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5">
							<SingleCard mediaData={mediaInfo} fieldType={"movie"} />
						</div>
					))}
			</div>
		</>
	);
};

export default Movie;
