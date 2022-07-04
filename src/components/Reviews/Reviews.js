import React, { useState, useEffect } from "react";
import useReviews from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import Spinner from "../Spinner/Spinner";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (reviews) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <h1 className="text-4xl text-center pt-8 text-green-800 font-bold font-serif my-4">
            Reviews
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-3/4 xl:w-3/5 2xl:w-3/4 mx-auto pt-20 lg:gap-20 gap-10 pb-4 lg:pb-16">
            {reviews.map((review) => (
              <ReviewCard review={review} key={review.id}></ReviewCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
