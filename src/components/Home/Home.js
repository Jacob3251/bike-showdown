import React from "react";

import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import InfoPart from "../InfoPart/InfoPart";
const Home = () => {
  return (
    <div className="px-12 py-8">
      <InfoPart className="bg-orange-600"></InfoPart>
      {/* Review part */}
      <div className="pt-10">
        <h1 className="text-4xl">Customer Review</h1>
      </div>
    </div>
  );
};

export default Home;
