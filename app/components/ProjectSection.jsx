import React from "react";

const ProjectSection = ({className}) => {
  return (
    <section className={`h-[100dvh] grid grid-cols-2 gap-[440px] bg-slate-800 mt-16 ${className}`}>
      <div className="font-jetbr text-6xl pl-20 h-full justify-center items-center flex">Projects</div>
      <div>Right</div>
    </section>
  );
};

export default ProjectSection;
