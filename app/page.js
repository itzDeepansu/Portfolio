"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TypingText from "@/components/animata/text/typing-text.jsx";
import SkillsSection from "./components/SkillsSection";
import { useTheme } from "next-themes";
import ProjectSection from "./components/ProjectSection";
import Experiences from "./components/Experiences";
import { Vortex } from "@/components/ui/vortex";
import ScrollImage from "./components/ScrollImage";

export default function Home() {
  const { setTheme } = useTheme();
  const [scrollTopper, setScrollTopper] = useState(0);
  setTheme("dark");
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrollTopper(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="image-container h-[3354px] relative mx-4 xl:mx-10 box-border font-jetbr overflow-clip">
      <Navbar classes="sticky top-0 animate-fadeDown" />

      <section
        className={` ${
          scrollTopper >= 200 ? "animate-fadeOut opacity-0" : "animate-fadeIn"
        }`}
      >
        <Vortex
          backgroundColor={"black"}
          baseHue={100}
          particleCount={500}
          className="h-[80dvh] flex flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-2 lg:gap-96"
        >
          <div className="lg:h-full text-6xl lg:text-6xl xl:text-7xl overflow-visible lg:pt-40 xl:pt-36 pl-10">
            <div className="font-dancing text-6xl xl:text-9xl lg:text-8xl text-foreground">
              Creative
            </div>
            <TypingText
              text="Developer."
              waitTime="1200"
              hideCursorOnComplete={true}
              delay={60}
            />
          </div>
          <div className="px-10 lg:px-0 lg:h-full flex flex-col justify-center gap-6 text-sm xl:pl-16">
            <div className="text-mutedForeground">
              Hi! I&#39;m Deepansu Siwach , an India based creative
              <span className="text-foreground"> web developer </span>
              and
              <span className="text-foreground"> web designer </span>.
            </div>
            <div className="list-none text-mutedForeground">
              I started learning web development about an year ago but I also
              have interest in
              <span className="text-white"> Artificial Intelligence </span>
              and
              <span className="text-white"> Machine Learning </span>. I want to
              use my skills of Web and AI to solve{" "}
              <TypingText
                text=" real world problems"
                waitTime="1200"
                hideCursorOnComplete={true}
                delay={60}
                className="text-foreground inline-flex"
                grow
              />
              .
            </div>
          </div>
        </Vortex>
      </section>
      <SkillsSection
        className={`${scrollTopper >= 260 ? "animate-fadeIn" : "hidden"} ${
          scrollTopper >= 1370 ? "animate-fadeOut opacity-0.1" : ""
        }`}
      />

      <ProjectSection
        className={`${scrollTopper >= 1370 ? "animate-fadeIn" : "hidden"} ${
          scrollTopper >= 2170 ? "animate-fadeOut opacity-0.1" : ""
        }`}
      />
      <Experiences
        className={`${scrollTopper >= 2170 ? "animate-fadeIn" : "hidden"} ${
          scrollTopper >= 2970 ? "animate-fadeOut opacity-0.1" : ""
        }`}
      />

      <ScrollImage className="hidden lg:block" />
      <Footer className="animate-fadeUp" />
    </div>
  );
}

//lg-xl = Ipad
//xl+ = Desktop
