import React from "react";
import { WebSkillsOne, WebSkillsTwo, AISkills ,BlockChainSkills } from "./WebSkills";
import { BackgroundBeams } from "@/components/ui/background-beams";

const SkillsSection = ({className}) => {
  return (
    <div className={`grid grid-cols-2 gap-[440px] mt-16 ${className}`}>
      <BackgroundBeams />
      <div className="flex flex-col gap-10">
        <div className="font-jetbr text-4xl pl-20">Skills</div>
        <AISkills />
        <WebSkillsTwo />
      </div>
      <div className="flex flex-col gap-10">
        <WebSkillsOne />
        <BlockChainSkills />
      </div>
    </div>
  );
};

export default SkillsSection;
