import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
const ProjectSection = ({ className }) => {
  return (
    <section
      className={`h-[100dvh] flex flex-col sm:flex-row sm:justify-between gap-16 mt-56 ${className}`}
    >
      <div className="sm:w-1/3 font-jetbr text-4xl px-4 sm:pl-9 h-full justify-start items-start flex flex-col gap-4">
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
      <div className="sm:w-1/3 flex flex-col gap-10 sm:pr-1">
        <Link className="flex justify-center items-center relative group hover:outline hover:outline-1"
          href="/projects/xist"
          >
          <div className="absolute text-4xl group-hover:z-40">XZIST</div>
          <img
            src="/projects/XIST/XIST_Login_Page_Dark.PNG"
            alt=""
            className=" group-hover:blur-md group-hover:opacity-60 cursor-pointer z-20  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </Link>
        <Link
          className="flex justify-center items-center relative group hover:outline hover:outline-1"
          href="/projects/dtc"
        >
          <div className="absolute text-4xl group-hover:z-40">DTC Admin</div>
          <img
            src="/projects/DTC/DTC_Landing_Page_Light.PNG"
            alt=""
            className="group-hover:blur-md group-hover:opacity-60 cursor-pointer z-20  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </Link>
        <Link className="flex justify-center items-center relative group hover:outline hover:outline-1"
          href="/projects/shopni">
          <div className="absolute text-4xl group-hover:z-40">ShopNi</div>
          <img
            src="/projects/ECommerce/EComm_Landing_Page.PNG"
            alt=""
            className="group-hover:blur-md group-hover:opacity-60 cursor-pointer z-20  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </Link>
      </div>
      {/* <BackgroundBeams /> */}
    </section>
  );
};

export default ProjectSection;
