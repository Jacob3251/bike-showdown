import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewCard = (props) => {
  const { id, name, image, reviews, ratings } = props.review;
  return (
    <div className="shadow-lg hover:shadow-2xl bg-green-200 hover:shadow-green-400 w-72 mx-auto md:w-96 h-80 md:h-72 rounded pt-8 mb-10 lg:mb-0">
      {/* image-avatar */}
      <div className="pb-5">
        <img
          src={image}
          className="w-20 h-20 rounded-full mx-auto -mt-20 shadow-lg hover:w-24 hover:h-24"
          alt={name}
        />
      </div>
      <h2>{name}</h2>
      <div>
        <h3 className="">
          <span>Ratings:</span>
          <Rating
            initialRating={parseFloat(ratings)}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
            className=""
          ></Rating>
        </h3>
      </div>
      <div className="w-full text-center px-4">
        <p className="text-3xl text-left text-blue-500 h-4">"</p>
        <p className="text-sm text-gray-600 text-center px-4">{reviews}</p>
        <p className="text-3xl text-right text-blue-500">"</p>
      </div>
    </div>
  );
};

export default ReviewCard;
