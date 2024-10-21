import React from "react";

const Navbar = ({ classes }) => {
  return (
    <div
      className={`h-20 ${classes} font-jetbr flex justify-between pt-3 text-xs bg-black z-20`}
    >
      <div className="font-bebas text-xl">Deepansu</div>
      <div>
        <div className="text-mutedForeground">Available at :</div>
        <div className="underline">itzdeepansu@gmail.com</div>
      </div>
      <ul className="list-none">
        <li>Figma Designs</li>
        <li>React Next.js Three.js</li>
        <li className="text-mutedForeground">Gsap C++</li>
        <li className="text-mutedForeground">Python</li>
      </ul>
      <ul className="list-none">
        <li>Home</li>
        <li className="text-mutedForeground">Skills</li>
        <li className="text-mutedForeground">Projects</li>
        <li className="text-mutedForeground">Achievements</li>
      </ul>
    </div>
  );
};

export default Navbar;
