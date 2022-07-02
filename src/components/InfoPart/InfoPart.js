import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import IM from "./1.png";
const InfoPart = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-center justify-center md:max-w-4/5">
        {/* image-part */}
        <div className="">
          <img src={IM} alt="" />
          {console.log("img loaded")}
        </div>
        {/* Information-part */}
        <div className="text-left">
          <h1 className="text-3xl font-sans font-extrabold line tracking-wide md:text-4xl mb-5">
            New Bike in TOWN
          </h1>
          <h3 className="text-2xl font-sans font-semibold line tracking-widest md:text-3xl mb-5">
            New 250cc beauty in town
          </h3>
          <p className="pb-5">
            Kawasaki Ninja ZX-25R Bike Price in BD 2022. It is liquid-cooled,
            16-valve, In-line 4-cylinder, 249.80 ccEngine and generates Maximum
            Power 51 HP @ 15,500 rpm. It's Maximum Torque is 22.9 Nm @ 14,500
            rpm.
          </p>
          <CustomLink
            to="/about"
            className="bg-green-500 font-semibold text-white hover:shadow-gray-600 hover:shadow-stone-500 hover:shadow-md  rounded-[30px] px-5 py-2"
          >
            About
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default InfoPart;
