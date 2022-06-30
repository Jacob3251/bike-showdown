import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  return (
    <div className="sticky top-0 bg-green-400 flex justify-center px-12 py-8 md:justify-between">
      <div className="hidden md:block">
        <Link
          className="font-mono font-bold text-2xl text-white shadow-gray-600 shadow-stone-700 shadow-xl rounded-[40px] px-5 py-3"
          to="/"
        >
          Bike Showroom
        </Link>
      </div>
      <div className="flex text-xl gap-5">
        <CustomLink
          to="/"
          className="font-semibold text-white hover:shadow-gray-600 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
        >
          Home
        </CustomLink>
        <CustomLink
          to="/reviews"
          className="text-white hover:shadow-gray-600 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
        >
          Reviews
        </CustomLink>
        <CustomLink
          to="/dashboard"
          className="text-white hover:shadow-gray-600 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
        >
          DashBoard
        </CustomLink>
        <CustomLink
          to="/blogs"
          className="text-white hover:shadow-gray-600 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
        >
          Blogs
        </CustomLink>
        <CustomLink
          to="/about"
          className="text-white hover:shadow-gray-600 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
        >
          About
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
