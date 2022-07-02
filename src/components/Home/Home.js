import React from "react";
import HomeReview from "../HomeReview/HomeReview";
import InfoPart from "../InfoPart/InfoPart";

const Home = () => {
  return (
    <div className="px-12 py-8">
      <div>
        <InfoPart className="mb-15"></InfoPart>
        {/* Review part */}
        <HomeReview className=""></HomeReview>
      </div>
    </div>
  );
};

export default Home;
