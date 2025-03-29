import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
const ProjectSection = ({ className }) => {
  const handleProjectClick = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.getAttribute("name"));
    window.open(e.currentTarget.getAttribute("name"));
  };
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
        <Link className="flex justify-center items-center relative group"
          href="/projects/xist"
          >
          <div className="absolute text-4xl group-hover:z-40">XZIST</div>
          <img
            src="/projects/XIST/XIST_Login_Page_Dark.PNG"
            alt=""
            className=" group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-20  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </Link>
        <Link
          className="flex justify-center items-center relative group"
          href="/projects/dtc"
        >
          <div className="absolute text-4xl group-hover:z-40">DTC Admin</div>
          <img
            src="/projects/DTC/DTC_Landing_Page_Light.PNG"
            alt=""
            className="group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-20  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </Link>
        <Link className="flex justify-center items-center relative group"
          href="/projects/shopni">
          <div className="absolute text-4xl group-hover:z-40">ShopNi</div>
          <img
            src="/projects/ECommerce/EComm_Landing_Page.PNG"
            alt=""
            className="group-hover:blur-sm group-hover:opacity-60 cursor-pointer z-20  transition-transform duration-1000 linear hover:outline hover:outline-mutedForeground hover:outline-1"
          />
        </Link>
      </div>
      {/* <BackgroundBeams /> */}
    </section>
  );
};

export default ProjectSection;
