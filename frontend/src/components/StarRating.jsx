import { FaRegStar, FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		stars.push(
			<span
				key={i}
				className="text-white text-BodyS md:text-BodyM lg:text-HeadingXS">
				{i < rating ? <FaStar  /> : <FaRegStar />}
			</span>
		);
	}
	return <div className="flex">{stars}</div>;
};

export default StarRating;
