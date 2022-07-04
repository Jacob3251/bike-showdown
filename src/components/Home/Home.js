import React from "react";
import Footer from "../Footer/Footer";
import HomeReview from "../HomeReview/HomeReview";
import InfoPart from "../InfoPart/InfoPart";

const Home = () => {
  return (
    <div className="px-12 py-8">
      <div className="items-center">
        <InfoPart className=""></InfoPart>
        {/* Review part */}
        <HomeReview></HomeReview>
      </div>
    </div>
  );
};

export default Home;
