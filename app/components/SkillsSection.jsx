import React from "react";
import { WebSkillsOne, WebSkillsTwo, AISkills } from "./WebSkills";
// import { BackgroundBeams } from "@/components/ui/background-beams";

const SkillsSection = ({ className }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between mt-16 ${className}`}
    >
      {/* <BackgroundBeams /> */}
      <div className="flex flex-col gap-20 w-full sm:w-1/3">
        <div className="font-jetbr text-4xl pl-4 sm:pl-9 justify-start items-start flex flex-col gap-4 mt-24">
          Skills
          <div className="text-xs text-mutedForeground w-[90dvw] sm:w-fit">
            Skilled in building dynamic,
            <span className="text-foreground">SEO-friendly </span>
            web applications using Next.js, with expertise in server-side
            rendering,
            <span className="text-foreground"> API integration </span>
            and
            <span className="text-foreground"> performance optimization.</span>
          </div>
          <div className="text-xs text-mutedForeground  w-[90dvw] sm:w-fit">
            Proficient in Python, TensorFlow, Keras, and Pandas, with experience
            in machine learning,
            <span className="text-foreground">data analysis </span>
            and developing
            <span className="text-foreground"> AI-driven solutions.</span>
          </div>
        </div>
        <WebSkillsOne className="flex sm:hidden" />
        <WebSkillsTwo />
      </div>
        <div className="flex flex-col gap-10 w-full sm:w-1/3">
        <WebSkillsOne className="hidden sm:flex" />
        <AISkills />
        {/* <BlockChainSkills /> */}
      </div>
    </div>
  );
};

export default SkillsSection;
