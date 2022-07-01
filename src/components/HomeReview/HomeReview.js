import React from "react";
import useReviews from "../../hooks/useReview";
import CustomLink from "../CustomLink/CustomLink";
import ReviewCard from "../ReviewCard/ReviewCard";

const HomeReview = () => {
  const [reviews, setReviews] = useReviews();
  const sliced = reviews.slice(0, 3);
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-4xl">Customer Review</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-3/4 xl:w-3/5 2xl:w-3/4 mx-auto pt-20 lg:gap-20 gap-10 pb-4 lg:pb-16">
          {sliced.map((review) => (
            <ReviewCard review={review}></ReviewCard>
          ))}
        </div>
        <CustomLink
          to="/reviews"
          className="bg-green-500 font-semibold text-white hover:shadow-gray-600 hover:shadow-stone-500 hover:shadow-md  rounded-[30px] px-5 py-2"
        >
          See all reviews
        </CustomLink>
      </div>
    </div>
  );
};

export default HomeReview;
