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
import { DNA } from "react-loader-spinner";
export default function Home() {
  const { setTheme } = useTheme();
  const [scrollTopper, setScrollTopper] = useState(0);
  const[isLoading, setIsLoading] = useState(true);
  setTheme("dark");
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrollTopper(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-background animate-fadeIn">
        {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
         */}
        <DNA
          visible={true}
          height="300"
          width="300"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="blur-sm scale-200 scale-[20]"
        />
      </div>
    );
  }
  return (
    <div className="image-container h-[3350px] relative mx-10 box-border font-jetbr overflow-clip">
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
          className="h-[80dvh] grid grid-cols-2 gap-96"
        >
          <div className="h-[80dvh] text-7xl overflow-hidden pt-36 pl-10">
            <div className="font-dancing text-9xl text-foreground">Creative</div>
            <TypingText
              text="Developer."
              waitTime="1200"
              hideCursorOnComplete={true}
              delay={60}
            />
          </div>
          <div className="h-[80dvh] flex flex-col justify-center gap-6 text-sm pl-16 pb-16">
            <ul className="list-none">
              <li className="text-mutedForeground">
                Hi! I&apos;m Deepansu Siwach , an India based
              </li>
              <li>
                creative web developer
                <span className="text-mutedForeground"> and </span>
                web designer
              </li>
            </ul>
            <ul className="list-none text-mutedForeground">
              <li>I started learning web development about an year ago</li>
              <li>
                but I also have interest in
                <span className="text-foreground">
                  {" "}
                  Artificial Intelligence{" "}
                </span>
              </li>
              <li>
                and
                <span className="text-foreground"> Machine Learning </span>. I
                want to use my skills of
              </li>
              <li>
                Web and AI to solve{" "}
                <TypingText
                  text=" real world problems"
                  waitTime="1200"
                  hideCursorOnComplete={true}
                  delay={60}
                  className="text-foreground inline-flex"
                  grow
                />
                .
              </li>
            </ul>
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
