import React from "react";
import {
  WebSkillsOne,
  WebSkillsTwo,
  AISkills,
} from "./WebSkills";
// import { BackgroundBeams } from "@/components/ui/background-beams";

const SkillsSection = ({ className }) => {
  return (
    <div className={`grid grid-cols-2 gap-[440px] mt-16 ${className}`}>
      {/* <BackgroundBeams /> */}
      <div className="flex flex-col gap-20">
        <div className="font-jetbr text-4xl pl-20 justify-start items-start flex flex-col gap-4 mt-24">
          Skills
          <div className="text-xs text-mutedForeground">
            Skilled in building dynamic,
            <span className="text-foreground">SEO-friendly </span>
            web applications using Next.js, with expertise in server-side
            rendering,
            <span className="text-foreground"> API integration </span>
            and
            <span className="text-foreground"> performance optimization.</span>
          </div>
          <div className="text-xs text-mutedForeground">
            Proficient in Python, TensorFlow, Keras, and Pandas, with experience
            in machine learning,
            <span className="text-foreground">data analysis </span>
            and developing
            <span className="text-foreground"> AI-driven solutions.</span>
          </div>
        </div>
        <WebSkillsTwo />
      </div>
      <div className="flex flex-col gap-10">
        <WebSkillsOne />
        <AISkills />
        {/* <BlockChainSkills /> */}
      </div>
    </div>
  );
};

export default SkillsSection;
