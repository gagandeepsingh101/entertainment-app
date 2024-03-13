import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import { useSearchMultiMedia } from "../service/tmdb.service";
import { DNA } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchMedia = () => {
	const { mediaType, searchQuery } = useParams();
	const [mediaData, setMediaData] = useState(null);
	const [loading, setLoading] = useState(true);
	const searchMediaData = useSearchMultiMedia;
	const { pathname } = useLocation();
	const bookmarkedData = useSelector((state) => state.bookmark.bookmarks);

	useEffect(() => {
		setMediaData(null);
		setLoading(true);
		setTimeout(() => {
			if (searchQuery) {
				if (pathname.includes("bookmarks")) {
					console.log(pathname);
					setMediaData(
						bookmarkedData.filter((bookmark) =>
							bookmark.title.toLowerCase().includes(searchQuery.toLowerCase())
						)
					);
				} else {
					// Invoke useSearchMultiMedia to fetch data
					searchMediaData(
						searchQuery,
						(data) => {
							setMediaData(data);
						},
						mediaType
					);
				}
				setLoading(false);
			}
		}, 2000);
	}, [searchQuery, mediaType, searchMediaData, pathname, bookmarkedData]);

	return (
		<>
			{loading ? (
				<div className="w-full h-4/5 flex items-center justify-center">
					<DNA height={100} width={100} />
				</div>
			) : (
				<>
					{mediaData ? (
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
