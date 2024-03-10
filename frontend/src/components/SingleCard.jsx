import { useEffect, useState } from "react";
import { useFetchTMDBImage } from "../utils/useFetchTMDBImage.utils";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { IoPlayCircle } from "react-icons/io5";

const SingleCard = ({ mediaData, fieldType }) => {
	const fetchTmdbImage = useFetchTMDBImage;
	const [posterImage, setPosterImage] = useState();

	useEffect(() => {
		fetchTmdbImage(mediaData.id, setPosterImage, mediaData.mediaType);
	}, [fetchTmdbImage]);

	return (
		<>
			{fieldType === "trending" ? (
				<div className="w-full h-full relative group">
					<img
						src={"https://image.tmdb.org/t/p/w500" + posterImage}
						className="w-full h-full rounded-xl absolute z-10 group-hover:opacity-55"
						alt=""
					/>
					<div className="w-full h-full z-40 relative bg-gradient-to-b from-transparent to-[#000000be] rounded-xl  ">
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
							<p className="text-BodyM md:text-HeadingXS lg:text-HeadingM">
								{mediaData.title}
							</p>
						</div>
						<CiBookmark className="absolute right-1 top-1 bg-[#00000070] text-3xl p-1 rounded-full hover:bg-white hover:fill-black cursor-pointer md:right-2 md:top-2 md:text-4xl lg:text-5xl" />
						<div className="hidden group-hover:flex bg-[#ffffff7c] absolute top-1/2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gap-2 items-center -translate-y-1/2 cursor-pointer md:px-4 md:py-2">
							<IoPlayCircle className="text-xl md:text-4xl" />
							<span className="text-BodyS md:text-BodyM lg:text-HeadingXS">
								Play
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full h-5/6 relative flex flex-col justify-between gap-2 group ">
					<div className="w-full h-5/6 relative ">
						<img
							src={
								"https://image.tmdb.org/t/p/w500" +
								(posterImage !== undefined ? posterImage : mediaData.image)
							}
							className="w-full h-full rounded-xl absolute z-10 group-hover:opacity-55"
							alt=""
						/>
						<CiBookmark className="absolute z-50 right-1 top-1 bg-[#00000070] text-2xl p-1 rounded-full hover:bg-white hover:fill-black cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl" />
						<div className="hidden group-hover:flex bg-[#ffffff7c] absolute top-1/2 left-1/2 -translate-x-1/2 px-2 py-1 z-50 rounded-full gap-1 items-center -translate-y-1/2 cursor-pointer lg:px-6 lg:py-2 lg:gap-3">
							<IoPlayCircle className="text-xl md:text-3xl" />
							<span className="text-BodyS md:text-BodyM lg:text-HeadingXS">
								Play
							</span>
						</div>
					</div>
					<div className="w-full h-1/6 flex flex-col">
						<p className="flex items-center text-BodyS font-light md:text-BodyM">
							<span>{mediaData.releaseDate.split("-")[0]}</span>
							<LuDot className="text-BodyS md:text-BodyM" />
							<span className="flex items-center gap-1">
								{mediaData.mediaType === "movie" ? (
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
							<span>{mediaData.isAdult ? "18+" : "PG"}</span>
						</p>
						<p className="text-BodyM md:text-HeadingXS">{mediaData.title}</p>{" "}
					</div>
				</div>
			)}
		</>
	);
};

export default SingleCard;
