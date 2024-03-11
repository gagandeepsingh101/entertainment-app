import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import { useSearchMultiMedia } from "../service/tmdb.service";

const SearchMedia = () => {
	const { mediaType, searchQuery } = useParams();
	const [mediaData, setMediaData] = useState();
	const searchMediaData = useSearchMultiMedia;
	useEffect(() => {
		if (searchQuery) {
			searchMediaData(searchQuery, setMediaData, mediaType);
		}
	}, [mediaType, searchMediaData, searchQuery]);
	return (
		<>
			{mediaData ? (
				<>
					<p className="text-HeadingM font-light mb-2 md:font-normal lg:text-HeadingL lg:font-light lg:mt-5">
						{/* {`Find ${mediaData && mediaData.length} results on '${searchQuery}' `} */}
						Find{" "}
						{`${mediaData && mediaData.length === 14 ? "top" : ""} ${
							mediaData && mediaData.length
						} results on '${searchQuery}'`}
					</p>
					<div className="w-full h-5/6 flex flex-wrap   ">
						{mediaData &&
							mediaData.map((mediaInfo) => (
								<div
									key={mediaInfo.id}
									className="w-[47%] mx-1 my-5 h-1/3 md:w-[30%] md:h-1/2 md:mx-2 md:my-3 lg:w-[23%] lg:h-2/5">
									<SingleCard
										mediaData={mediaInfo}
										fieldType={"search " + mediaType + " data"}
									/>
								</div>
							))}
					</div>
				</>
			) : (
				<p className="text-HeadingM font-light mb-2 md:font-normal lg:text-HeadingL lg:font-light lg:mt-5">
					No Search Found
				</p>
			)}
		</>
	);
};

export default SearchMedia;
