import React from "react";
import { WebSkillsOne, WebSkillsTwo, AISkills ,BlockChainSkills } from "./WebSkills";
import { BackgroundBeams } from "@/components/ui/background-beams";

const SkillsSection = ({className}) => {
  return (
    <div className={`grid grid-cols-2 gap-[440px] mt-16 ${className}`}>
      <BackgroundBeams />
      <div className="flex flex-col gap-10">
        <div className="font-jetbr text-4xl pl-20 h-full justify-start items-start flex flex-col gap-4 mt-24">
        Skills
        <div className="text-xs text-mutedForeground">
          I designed and developed these showcase projects with Figma, Spline,
          React and ThreeJs in 2024.
        </div>
        <div className="text-xs text-mutedForeground">
          Various 3D elements/scenes are tailor-made to create more absorbing
          user experiences. Click to view each project in detail.
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
