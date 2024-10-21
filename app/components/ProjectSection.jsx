import React from "react";
import Expandable from "@/components/animata/carousel/expandable";

const ProjectSection = ({ className }) => {
  return (
    <section
      className={`h-[100dvh] grid grid-cols-2 gap-[440px] mt-16 ${className}`}
    >
      <div className="font-jetbr text-4xl pl-20 h-full justify-start items-start flex flex-col gap-4">
        Projects
        <div className="text-xs text-mutedForeground">
          I designed and developed these showcase projects with Figma, Spline,
          React and ThreeJs in 2024.
        </div>
        <div className="text-xs text-mutedForeground">
          Various 3D elements/scenes are tailor-made to create more absorbing
          user experiences. Click to view each project in detail.
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <img src="/projects/XIST/XIST_Login_Page_Dark.png" alt="" />
        <img src="/projects/DTC/DTC_Landing_Page_Light.png" alt="" />
        <img src="/projects/ECommerce/EComm_Landing_Page.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectSection;
