import { FaRegStar, FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    // Array to store star elements
	const stars = [];
	
    // Loop to generate stars based on the rating
	for (let i = 0; i < 5; i++) {
		stars.push(
			<span
				key={i}
				className="text-white text-BodyS md:text-BodyM lg:text-HeadingXS">
				{i < rating ? <FaStar /> : <FaRegStar />}
			</span>
		);
	}
	
    // Render the stars in a flex container
	return <div className="flex">{stars}</div>;
};

export default StarRating;
