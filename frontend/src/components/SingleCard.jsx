import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useFetchTMDBImage } from "../utils/useFetchTMDBImage.utils"; // Custom hook for fetching images
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../store/bookmarkSlice"; // Redux actions for adding/removing bookmarks

const SingleCard = ({ mediaData, fieldType, mediaType }) => {
	// State and hooks initialization
	const fetchTmdbImage = useFetchTMDBImage;
	const [posterImage, setPosterImage] = useState();
	const [isBookmark, setIsBookmarked] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const bookmarkData = useSelector((state) => state.bookmark.bookmarks);
	// Effect for fetching image and checking bookmark status
	useEffect(() => {
		fetchTmdbImage(
			mediaData.id || mediaData.mediaId,
			setPosterImage,
			mediaType || mediaData?.mediaType
		);
		if (
			bookmarkData.some(
				(bookmark) => (bookmark.mediaId || bookmark.id) == mediaData.id
			) ||
			fieldType === "bookmarks"
		) {
			setIsBookmarked(true);
		}
	}, [bookmarkData, dispatch, fetchTmdbImage, fieldType, mediaData, mediaType]);

	return (
		<>
			{/* Conditional rendering based on field type */}
			{fieldType === "trending" ? (
				<div className="w-full h-full relative group">
					{/* Poster image */}
					{posterImage && (
						<img
							src={"https://image.tmdb.org/t/p/w500" + posterImage}
							className="w-full h-full rounded-xl absolute z-10 group-hover:opacity-55"
							alt=""
						/>
					)}
					{/* Overlay */}
					<div className="w-full h-full z-40 relative bg-gradient-to-b from-transparent to-[#000000be] rounded-xl">
						{/* Metadata */}
						<div className="absolute bottom-1 left-2 md:bottom-2 md:left-3 lg:bottom-3 lg:left-5">
							<p className="flex items-center text-BodyS font-light md:text-BodyM lg:text-HeadingXS">
								<span>{mediaData.releaseDate.split("-")[0]}</span>
								<LuDot className="text-HeadingXS" />
								<span className="flex items-center gap-1">
									{mediaData.mediaType === "movie" ? (
										<>
											<MdLocalMovies /> <span>Movie</span>
										</>
									) : (
										<>
											<TbDeviceTvOld /> <span>Tv Series</span>
										</>
									)}
								</span>
								<LuDot className="text-HeadingXS" />
								<span>{mediaData.isAdult ? "18+" : "PG"}</span>
							</p>
							{/* Title */}
							<p className="text-BodyM md:text-HeadingXS lg:text-HeadingM">
								{mediaData.title}
							</p>
						</div>
						{/* Bookmark icon */}
						{isBookmark && document.cookie.includes("UserAuth") ? (
							<IoMdBookmark
								onClick={() => {
									setIsBookmarked(false);
									dispatch(removeBookmark(mediaData.id || mediaData.mediaId));
								}}
								className="absolute z-50 right-1 top-1 bg-[#00000070] text-2xl p-1 rounded-full hover:bg-white hover:fill-black cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl"
							/>
						) : (
							<CiBookmark
								onClick={() => {
									setIsBookmarked(true);
									dispatch(addBookmark(mediaData));
								}}
								className="absolute z-50 right-1 top-1 bg-[#00000070] text-2xl p-1 rounded-full hover:bg-white hover:fill-black cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl"
							/>
						)}
						{/* Play button */}
						<div
							onClick={() => {
								navigate(
									`/${mediaData.mediaType ? mediaData.mediaType : mediaType}/${
										mediaData?.id || mediaData?.mediaId
									}`
								);
							}}
							className="hidden group-hover:flex bg-[#ffffff7c] absolute top-1/2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gap-2 items-center -translate-y-1/2 cursor-pointer md:px-4 md:py-2">
							<IoPlayCircle className="text-xl md:text-4xl" />
							<span className="text-BodyS md:text-BodyM lg:text-HeadingXS">
								Play
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full h-5/6 relative flex flex-col justify-between gap-2 group">
					<div className="w-full h-5/6 relative ">
						{/* Poster image */}
						{posterImage || mediaData?.image ? (
							<img
								src={
									"https://image.tmdb.org/t/p/w500" +
									(posterImage !== undefined ? posterImage : mediaData?.image)
								}
								className="w-full h-full rounded-xl absolute z-10 group-hover:opacity-55"
								alt=""
							/>
						) : (
							<div className="w-full h-full rounded-xl flex items-center justify-center absolute z-10 group-hover:opacity-55">
								No Image Preview
							</div>
						)}
						{/* Bookmark icon */}
						{isBookmark && document.cookie.includes("UserAuth") ? (
							<IoMdBookmark
								onClick={() => {
									setIsBookmarked(false);
									dispatch(removeBookmark(mediaData.id || mediaData.mediaId));
								}}
								className="absolute z-50 right-1 top-1 bg-[#00000070] text-2xl p-1 rounded-full hover:bg-white hover:fill-black cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl"
							/>
						) : (
							<CiBookmark
								onClick={() => {
									setIsBookmarked(true);
									dispatch(addBookmark(mediaData));
								}}
								className="absolute z-50 right-1 top-1 bg-[#00000070] text-2xl p-1 rounded-full hover:bg-white hover:fill-black cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl"
							/>
						)}
						{/* Play button */}
						<div
							onClick={() => {
								navigate(
									`/${mediaData.mediaType ? mediaData.mediaType : mediaType}/${
										mediaData?.id || mediaData?.mediaId
									}`
								);
							}}
							className="hidden group-hover:flex bg-[#ffffff7c] absolute top-1/2 left-1/2 -translate-x-1/2 px-2 py-1 z-50 rounded-full gap-1 items-center -translate-y-1/2 cursor-pointer lg:px-6 lg:py-2 lg:gap-3">
							<IoPlayCircle className="text-xl md:text-3xl" />
							<span className="text-BodyS md:text-BodyM lg:text-HeadingXS">
								Play
							</span>
						</div>
					</div>
					{/* Metadata */}
					<div className="w-full h-1/6 flex flex-col">
						<p className="flex items-center text-BodyS font-light md:text-BodyM">
							<span>{mediaData?.releaseDate?.split("-")[0]}</span>
							<LuDot className="text-BodyS md:text-BodyM" />
							<span className="flex items-center gap-1">
								{mediaData?.mediaType === "movie" ? (
									<>
										<MdLocalMovies /> <span>Movie</span>
									</>
								) : (
									<>
										<TbDeviceTvOld />{" "}
										<span className="truncate">Tv Series</span>
									</>
								)}
							</span>
							<LuDot className="text-BodyS md:text-BodyM" />
							<span>{mediaData?.isAdult ? "18+" : "PG"}</span>
						</p>
						{/* Title */}
						<p className="text-BodyM md:text-HeadingXS">{mediaData?.title}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default SingleCard;
