import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DNA } from "react-loader-spinner";
import SingleCard from "../components/SingleCard";

const Bookmarks = () => {
    const navigate = useNavigate();
    const bookmarks = useSelector((state) => state.bookmark.bookmarks);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!document.cookie) {
            navigate("/signup");
        } else {
            setLoading(false);
        }
    }, [navigate]);

    return (
        <>
            {loading ? (
                <div className="w-full h-4/5 flex items-center justify-center">
                    <DNA height={100} width={100} />
                </div>
            ) : bookmarks.length > 0 ? (
                <>
                    <p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
                        Bookmarked Movies
                    </p>
                    <div className="w-full h-fit flex flex-wrap">
                        {bookmarks
                            .filter((media) => media.mediaType === "movie")
                            .map((mediaInfo) => (
                                <div
                                    key={mediaInfo.mediaId + mediaInfo.image}
                                    className="w-[47%] mx-1 my-5 h-36 md:w-[30%] md:h-44 md:mx-2 md:my-3 lg:w-[23%] lg:h-64">
                                    <SingleCard mediaData={mediaInfo} fieldType={"bookmarks"} />
                                </div>
                            ))}
                    </div>
                    <p className="text-HeadingM font-light md:font-normal lg:font-light lg:text-HeadingL">
                        Bookmarked Tv Series
                    </p>
                    <div className="w-full h-fit flex flex-wrap">
                        {bookmarks
                            .filter((media) => media.mediaType === "tv")
                            .map((mediaInfo) => (
                                <div
                                    key={mediaInfo.mediaId + mediaInfo.image}
                                    className="w-[47%] mx-1 my-5 h-36 md:w-[30%] md:h-44 md:mx-2 md:my-3 lg:w-[23%] lg:h-64">
                                    <SingleCard mediaData={mediaInfo} fieldType={"bookmarks"} />
                                </div>
                            ))}
                    </div>
                </>
            ) : (
                <div className="w-full h-4/5 flex flex-col items-center justify-center gap-3">
                    <p className="text-HeadingXS md:text-HeadingM lg:text-HeadingL">
                        No Bookmarks Available
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        type="button"
                        className="bg-darkRed text-white text-center px-3 py-2 w-fit mx-auto rounded-md hover:bg-white hover:text-waikawaGrey">
                        Go to Home
                    </button>
                </div>
            )}
        </>
    );
};

export default Bookmarks;
