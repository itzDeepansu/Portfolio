import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

const Experiences = ({ className }) => {
  return (
    <section
      className={`flex flex-col-reverse sm:flex-row justify-between items-start mt-72 gap-20 mb-24 ${className}`}
    >
      {/* Left column: Logos and image */}
      <div className="sm:w-1/3 w-full flex flex-col gap-10 items-center sm:items-start px-4 sm:px-0">
        <div className="flex flex-wrap justify-center gap-4">
          <img src="/Experiences/Global_Trendz.png" alt="" className="w-40" />
          <img src="/Experiences/HackForEarth.jpg" alt="" className="w-40" />
        </div>
        <img
          src="/Experiences/SIH.jpg"
          alt=""
          className="rounded-sm w-80 sm:w-full object-contain"
        />
      </div>

      {/* Right column: Text content */}
      <div className="sm:w-1/3 w-full font-jetbr text-4xl lg:pl-20 px-4 sm:px-0 h-full flex flex-col gap-4">
        <div>Experience</div>

        <div className="text-xs text-mutedForeground">
          I have experience of working alone and in teams.
        </div>

        <div className="text-xs text-mutedForeground">
          I have experienced various environments like working for a
          <span className="text-foreground"> professional organization </span>
          (during my internships) but I have also experienced the intense
          environments of
          <span className="text-foreground"> Hackathons</span>.
        </div>

        <div className="flex flex-col gap-6 justify-start items-start text-xl mt-10 lg:mt-36">
          {/* Internships */}
          <div className="gap-2 flex flex-col">
            <div>Internships:</div>
            <div className="text-xs text-mutedForeground pl-4">
              <Link
                href="https://globaltrendz.com/"
                className="text-foreground hover:underline block"
                target="_blank"
              >
                Global Trendz
              </Link>
              Frontend Engineer - 2024 (June - July)
            </div>
            <div className="text-xs text-mutedForeground pl-4">
              <Link
                href="https://celebaltech.com/"
                className="text-foreground hover:underline block"
                target="_blank"
              >
                Celebal Technologies
              </Link>
              React JS Developer - 2025 (June - Now)
            </div>
          </div>

          {/* Hackathons */}
          <div className="gap-2 flex flex-col">
            <div>Hackathons:</div>
            <ul className="text-xs text-mutedForeground pl-4 space-y-1">
              <li className="flex justify-between w-full">
                <span className="text-foreground">SIH Round 5</span>
                <span>2024</span>
              </li>
              <li className="flex justify-between w-full">
                <span className="text-foreground">
                  HackWithChandigarh Finalist
                </span>
                <span>2024</span>
              </li>
              <li className="flex justify-between w-full">
                <span className="text-foreground">CodeForEarth Winner</span>
                <span>2024</span>
              </li>
              <li className="flex justify-between w-full">
                <span className="text-foreground">Zinnovatio Finalist</span>
                <span>2024</span>
              </li>
            </ul>
          </div>

          {/* CP section */}
          <div className="text-xs text-mutedForeground gap-2 flex flex-col">
            <div className="text-xl text-foreground">
              Competitive Programming:
            </div>
            <div>
              <Link
                target="_blank"
                href="https://leetcode.com/u/itzdeep/"
                className="text-foreground hover:underline pl-4"
              >
                LeetCode
              </Link>
              - 210+ Questions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
