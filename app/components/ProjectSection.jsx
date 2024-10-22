import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
const ProjectSection = ({ className }) => {
  return (
    <section
      className={`h-[100dvh] grid grid-cols-2 gap-[440px] mt-16 ${className}`}
    >
      <div className="font-jetbr text-4xl pl-20 h-full justify-start items-start flex flex-col gap-4">
        Projects
        <div className="text-xs text-mutedForeground">
          I designed and developed these showcase projects with Figma, Spline,
          React and
          <span className="text-foreground"> ThreeJs </span>
          in 2024.
        </div>
        <div className="text-xs text-mutedForeground">
          Various 3D elements/scenes are tailor-made to create more absorbing
          <span className="text-foreground"> user experiences</span>. Click to
          view each project in detail.
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center relative group">
          <div className="absolute text-4xl group-hover:z-40">XZIST</div>
          <img
            src="/projects/XIST/XIST_Login_Page_Dark.png"
            alt=""
            className=" group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-30 hover:scale-105 transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </div>
        <div className="flex justify-center items-center relative group">
          <div className="absolute text-4xl group-hover:z-40">DTC Admin</div>
          <img
            src="/projects/DTC/DTC_Landing_Page_Light.png"
            alt=""
            className="group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-30 hover:scale-105 transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </div>
        <div className="flex justify-center items-center relative group">
          <div className="absolute text-4xl group-hover:z-40">ShopNi</div>
          <img
            src="/projects/ECommerce/EComm_Landing_Page.png"
            alt=""
            className="group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-30 hover:scale-105 transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default ProjectSection;
