import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const NotFound = () => {
  return (
    <div className="w-full h-[60vh]">
      <h2 className="pt-20 pb-12">404 Error: Page not found</h2>
      <CustomLink
        to="/"
        className="bg-green-500 font-semibold text-white hover:shadow-gray-600 hover:shadow-stone-500 hover:shadow-md  rounded-[30px] px-5 py-2"
      >
        Back to home
      </CustomLink>
    </div>
  );
};

export default NotFound;
