import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";

const Experiences = ({ className }) => {
  return (
    <section
      className={`h-[100dvh] grid sm:grid-cols-2 gap-10 lg:gap-[440px] mt-52 ${className}`}
    >
      {/* <BackgroundBeams /> */}
      <div className="hidden sm:flex flex-col gap-10">
        <div className="flex">
          <img
            src="/Experiences/Global_Trendz.png"
            alt=""
            className="w-40 mx-auto"
          />
          <img
            src="/Experiences/HackForEarth.jpg"
            alt=""
            className="w-40 mx-auto"
          />
        </div>
        <img src="/Experiences/SIH.jpg" alt="" className="rounded-sm" />
      </div>
      <div className="font-jetbr text-4xl lg:pl-20 h-full mx-auto sm:justify-start sm:items-start flex flex-col gap-4">
        Experience
        <div className="text-xs text-mutedForeground">
          I have experience of working alone and in teams.
        </div>
        <div className="text-xs text-mutedForeground">
          I have experienced various environments like working for a
          <span className="text-foreground"> professional organization </span>(
          during my internship ) but I have also experienced tensed environments
          of
          <span className="text-foreground"> Hackathons</span>.
        </div>
        <div className="flex flex-col gap-4 justify-start items-start text-xl mt-10 lg:mt-44">
          <div className="gap-2 flex flex-col">
            <div>Hackathons:</div>
            <ul className="text-xs text-mutedForeground pl-20 list-none">
              <li>SIH Round 5 - 2024</li>
              <li>HackWithChandigarh Finalist - 2024 (September)</li>
              <li>CodeForEarth Winner -2024 (September)</li>
              <li>Zinnovatio Finalist - 2024 (October)</li>
            </ul>
          </div>
          <div className="gap-2 flex flex-col">
            <div>Internships:</div>
            <div className="text-xs text-mutedForeground pl-20">
              Global Trendz - 2024 (June - July)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
