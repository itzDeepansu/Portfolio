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
        <div className="flex flex-col gap-4 justify-start items-start text-xl mt-10 lg:mt-40">
          <div className="gap-2 flex flex-col">
            <div>Internships:</div>
            <div className="text-xs text-mutedForeground pl-20">
              <div className="text-foreground">Global Trendz</div> Frontend
              Engineer - 2024 (June - July)
            </div>
          </div>
          <div className="gap-2 flex flex-col">
            <div>Hackathons:</div>
            <ul className="text-xs text-mutedForeground pl-20 list-none">
              <li>
                <span className="text-foreground">SIH Round 5</span> -{" "}
                <span className="float-right">2024</span>
              </li>
              <li>
                <span className="text-foreground">
                  HackWithChandigarh Finalist
                </span>{" "}
                - <span className="float-right">2024</span>
              </li>
              <li>
                <span className="text-foreground ml-auto">
                  CodeForEarth Winner
                </span>{" "}
                - <span className="float-right">2024</span>{" "}
              </li>
              <li>
                <span className="text-foreground">Zinnovatio Finalist</span> -{" "}
                <span className="float-right">2024</span>
              </li>
            </ul>
          </div>
          <div className="text-xs text-mutedForeground gap-2 flex flex-col">
            <div className="text-xl text-foreground">
              Competetive Programming :
            </div>
            <div>
              <span className="text-foreground pl-20">LeetCode</span> - 200+
              Questions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
