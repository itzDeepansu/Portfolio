import React, { useState, useEffect } from "react";
const scrollToSection = (targetY, duration) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // easing function

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // limit to 1 (end of animation)
    const easeProgress = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * easeProgress);

    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    }
  };

  window.requestAnimationFrame(animation);
};

const Navbar = ({ classes }) => {
  const [scrollTopper, setScrollTopper] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      setScrollTopper(window.scrollY);
    };
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  return (
    <div
      className={`h-20 ${classes} font-jetbr flex justify-between pt-3 text-xs bg-background z-40`}
    >
      <div className="font-bebas text-xl">Deepansu</div>
      <div>
        <div className="text-mutedForeground">Available at :</div>
        <div className="underline">itzdeepansu@gmail.com</div>
      </div>
      <ul className="pt-4 list-none pb-2">
        <li>Figma Designs</li>
        <li>React Next.js Three.js</li>
        <li className="text-mutedForeground">Gsap C++</li>
        <li className="text-mutedForeground">Python</li>
      </ul>
      <ul className="list-none">
        <li
          className={`${
            scrollTopper <= 260 ? "text-foreground" : "text-mutedForeground"
          } cursor-pointer`}
          onClick={() => scrollToSection(0, 2000)}
        >
          Home
        </li>
        <li
          className={`${
            scrollTopper >= 260 && scrollTopper <= 1370
              ? "text-foreground"
              : "text-mutedForeground"
          } cursor-pointer`}
          onClick={() => scrollToSection(670, 2000)}
        >
          Skills
        </li>
        <li
          className={`${
            scrollTopper >= 1370 && scrollTopper <= 2170
              ? "text-foreground"
              : "text-mutedForeground"
          } cursor-pointer`}
          onClick={() => scrollToSection(1600, 2000)}
        >
          Projects
        </li>
        <li
          className={`${
            scrollTopper >= 2170 ? "text-foreground" : "text-mutedForeground"
          } cursor-pointer`}
          onClick={() => scrollToSection(2530, 2500)}
        >
          Achievements
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
