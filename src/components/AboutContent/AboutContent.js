import React from "react";
import CustomLink from "../CustomLink/CustomLink";
const AboutContent = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-7 items-center justify-center md:max-w-4/5 px-12 py-8">
        <div>
          <img
            src="https://content2.kawasaki.com/ContentStorage/KMC/RacingTeams/4/68617008-3bba-4733-9c8f-bdc5d6f8b6d4.jpg"
            alt=""
          />
        </div>
        <div className="text-left">
          <h1 className="text-3xl font-sans font-extrabold line tracking-wide md:text-4xl mb-5">
            Racing in the blood
          </h1>
          <p className="">
            Having won six Superbike championships in the last seven racing
            seasons, the Kawasaki Racing Team (KRT) is eager to return to its
            rightful place at the top step of the podium during the 2022 FIM
            Superbike World Championship (WorldSBK) while competing aboard the
            Ninja® ZX™-10RR. During the 2021 season, the team earned 35 podiums,
            8 pole positions and 13 race wins. Six-time WorldSBK champion
            Jonathan Rea reminded the class why he's the defending champion by
            racing his Ninja ZX-10RR motorcycle to 13 race wins and 30 total
            podium finishes. Stablemate Alex Lowes, a former winner and
            multi-time WorldSBK podium finisher as well as three-time Suzuka 8
            Hour winner, earned his 29th career WorldSBK podium and was again a
            podium threat every time the British-born rider lined up to race.
            Look for the Kawasaki Racing Team to grace the WorldSBK podium at
            every round in 2022.
          </p>
          <div className="mt-10">
            <CustomLink
              to="/"
              className="bg-green-500 font-semibold text-white hover:shadow-gray-600 hover:shadow-stone-500 hover:shadow-md  rounded-[30px] px-5 py-2"
            >
              Back to home
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
