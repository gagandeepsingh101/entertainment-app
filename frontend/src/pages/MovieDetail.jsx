import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchMediaDetail } from "../service/tmdb.service";
import { HiLink } from "react-icons/hi";
import { FaImdb } from "react-icons/fa";
import StarRating from "../components/StarRating";
import { DNA } from "react-loader-spinner";

const MovieDetail = () => {
	// Get mediaId from URL parameters
	const { mediaId } = useParams();

	// State to store fetched media detail
	const [mediaDetail, setMediaDetail] = useState();

	// Fetch movie detail using custom hook when component mounts or mediaId changes
	const fetchMovieDetail = useFetchMediaDetail;
	useEffect(() => {
		fetchMovieDetail(mediaId, setMediaDetail, "movie");
	}, [fetchMovieDetail, mediaId]);

	// Render MovieDetail component
	return (
		<>
			{mediaDetail ? ( // If mediaDetail is available, render movie details
				<div className="w-screen h-screen bg-leanBlue flex flex-col overflow-y-scroll scrollbar-corner-transparent scrollbar-thin items-center gap-5 py-4  scrollbar-thumb-darkRed scrollbar-track-transparent lg:flex-row lg:p-10 lg:justify-evenly">
					{/* Render movie image */}
					<img
						src={
							"https://image.tmdb.org/t/p/w500" + mediaDetail?.mediaData?.image
						}
						className="w-5/6 h-fit md:w-1/2 lg:w-1/3 lg:h-full my-auto"
						alt=""
					/>
					<div className="w-5/6 h-fit text-white flex flex-col gap-3 md:gap-6 lg:h-full lg:w-1/2">
						{/* Render movie title */}
						<p className="text-HeadingXS md:text-HeadingM lg:text-HeadingL font-bold">
							{mediaDetail?.mediaData?.title}
						</p>
						{/* Render movie tagline */}
						<p className="text-BodyS md:text-BodyM lg:text-HeadingXS">
							{mediaDetail?.mediaData?.tagline}
						</p>
						{/* Render movie rating */}
						<div className="flex items-center gap-4">
							<p className="text-BodyM md:text-HeadingXS lg:text-HeadingL">
								{mediaDetail?.mediaData?.rating.toFixed(1)}
							</p>
							<StarRating rating={Math.round(mediaDetail?.mediaData?.rating)} />
						</div>
						{/* Render movie details */}
						<div className="flex justify-between font-medium text-BodyS md:text-BodyM lg:text-HeadingXS">
							{/* Render movie length */}
							<p className="flex flex-col">
								<span className="text-waikawaGrey">Length</span>
								<span>{mediaDetail?.mediaData?.runtime + " "} min</span>
							</p>
							{/* Render movie language */}
							<p className="flex flex-col">
								<span className="text-waikawaGrey">Language</span>
								<span>{mediaDetail?.mediaData?.language[0]}</span>
							</p>
							{/* Render movie release year */}
							<p className="flex flex-col">
								<span className="text-waikawaGrey">Year</span>
								<span>
									{mediaDetail?.mediaData?.release_date?.split("-")[0]}
								</span>
							</p>
							{/* Render movie status */}
							<p className="flex flex-col">
								<span className="text-waikawaGrey">Status</span>
								<span>{mediaDetail?.mediaData?.status}</span>
							</p>
						</div>
						{/* Render movie genres */}
						<div className="w-full flex flex-col gap-1 lg:gap-3">
							<p className="text-BodyM font-bold md:text-HeadingXS lg:text-HeadingM">
								Genres
							</p>
							<div className="full text-BodyS flex gap-3 md:text-BodyM lg:text-HeadingXS">
								{mediaDetail?.mediaData?.genres.map((genre) => (
									<p
										key={genre}
										className="bg-white text-leanBlue px-3 py-1 rounded-md">
										{genre}
									</p>
								))}
							</div>
						</div>
						{/* Render movie synopsis */}
						<div className="w-full flex flex-col gap-2">
							<p className="text-BodyM font-bold md:text-HeadingXS lg:text-HeadingM">
								Synopsis
							</p>
							<p className="text-BodyS md:text-BodyM lg:text-HeadingXS">
								{mediaDetail?.mediaData?.overview}
							</p>
						</div>
						{/* Render movie casts */}
						<div className="w-full flex flex-col gap-2">
							<p className="text-BodyM font-bold md:text-HeadingXS lg:text-HeadingM">
								Casts
							</p>
							<div className="w-full text-BodyS flex flex-wrap gap-3 md:text-BodyM lg:text-HeadingXS">
								{mediaDetail?.cast.map((cast) => (
									<p
										key={cast}
										className="border-2 border-white px-3 py-1 rounded-md">
										{cast}
									</p>
								))}
							</div>
						</div>
						{/* Render buttons to external links */}
						<div className="w-full flex gap-5 py-10">
							{/* Render button to movie website */}
							<button
								onClick={() => {
									window.open(mediaDetail?.mediaData?.homepage);
								}}
								className={
									"text-BodyS bg-waikawaGrey px-3 py-2 rounded-md flex gap-3 items-center focus:outline-none md:text-BodyM lg:text-HeadingM lg:font-light lg:gap-6 lg:px-6 cursor-pointer " +
									(mediaDetail?.mediaData?.homepage === "" ||
									!mediaDetail?.mediaData?.homepage
										? "hidden"
										: "flex")
								}>
								<span>Website</span>
								<HiLink />
							</button>
							{/* Render button to IMDb page */}
							<button
								onClick={() => {
									window.open(
										"https://www.imdb.com/title/" +
											mediaDetail?.mediaData?.imdb_id
									);
								}}
								className={
									"text-BodyS bg-waikawaGrey px-3 py-2 rounded-md flex gap-3 items-center focus:outline-none md:text-BodyM lg:text-HeadingM lg:font-light lg:gap-6 lg:px-6 cursor-pointer " +
									(mediaDetail?.mediaData?.imdb_id === "" ||
									!mediaDetail?.mediaData?.imdb_id
										? "hidden"
										: "flex")
								}>
								<span>IMDB</span>
								<FaImdb />
							</button>
						</div>
					</div>
				</div>
			) : (
				// If mediaDetail is not available, render loading spinner
				<div className="w-screen h-screen flex items-center justify-center bg-leanBlue">
					<DNA height={100} width={100} />
				</div>
			)}
		</>
	);
};

export default MovieDetail; // Export MovieDetail component
