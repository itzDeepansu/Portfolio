import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";
const ProjectSection = ({ className }) => {
  return (
    <section
      className={`h-[100dvh] grid lg:grid-cols-2 lg:gap-[440px] mt-16 ${className}`}
    >
      <div className="font-jetbr text-4xl lg:pl-20 h-full justify-start items-start flex flex-col gap-4">
        Projects
        <div className="text-xs text-mutedForeground">
          I designed and developed these showcase projects with Figma, React,
          Next.js and
          <span className="text-foreground"> ThreeJs </span>
          in 2024.
        </div>
        <div className="text-xs text-mutedForeground">
          Various 3D elements/scenes are tailor-made to create more absorbing
          <span className="text-foreground"> user experiences</span>. Click to
          view each project in detail.
        </div>
      </div>
      <div className="flex flex-col mt-10 lg:mt-0 gap-10 h-[100%] lg:h-fit overflow-clip">
        <div className="flex justify-center items-center relative group">
          <div className="absolute text-4xl group-hover:z-40">XZIST</div>
          <img
            src="/projects/xist.PNG"
            alt=""
            className=" group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-30  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </div>
        <div className="flex justify-center items-center relative group">
          <div className="absolute text-4xl group-hover:z-40">DTC Admin</div>
          <img
            src="/projects/dtc.PNG"
            alt=""
            className="group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-30  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </div>
        <div className="flex justify-center items-center relative group">
          <div className="absolute text-4xl group-hover:z-40">ShopNi</div>
          <img
            src="/projects/ecom.PNG"
            alt=""
            className="group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-30  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </div>
      </div>
      {/* <BackgroundBeams /> */}
    </section>
  );
};

export default ProjectSection;
