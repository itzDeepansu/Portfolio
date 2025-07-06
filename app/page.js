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
import FadeInOnce from "./components/FadeInOnce";
import SplashCursor from "@/components/animata/SplashCursor";
export default function Home() {
  const { setTheme } = useTheme();
  const [scrollTopper, setScrollTopper] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
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
    <div className="sm:h-[3550px] h-[5020px] relative mx-2 sm:mx-10 box-border font-jetbr overflow-clip">
      <Navbar classes="sticky top-0 animate-fadeDown" />
      <SplashCursor />
      <FadeInOnce>
        <section>
          <Vortex
            backgroundColor={"black"}
            baseHue={100}
            particleCount={500}
            className="h-[80dvh] grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 sm:gap-96"
          >
            <div className="sm:h-[80dvh] text-6xl sm:text-7xl overflow-hidden pt-36 pl-4 sm:pl-10">
              <div className="font-dancing text-8xl sm:text-9xl text-foreground">
                Creative
              </div>
              <TypingText
                text="Developer."
                waitTime="1200"
                hideCursorOnComplete={true}
                delay={60}
              />
            </div>
            <div className="sm:h-[80dvh] flex flex-col justify-center gap-6 text-sm pl-4 sm:pl-16 pb-16">
              <div className="list-none">
                <span className="text-mutedForeground">
                  Hi! I&apos;m Deepansu Siwach , an India based{" "}
                </span>
                <span>
                  creative web developer
                  <span className="text-mutedForeground"> and </span>
                  web designer
                </span>
              </div>
              <div className="list-none text-mutedForeground">
                <span>I started learning web development about an year ago</span>
                <span>
                  but I also have interest in
                  <span className="text-foreground">
                    {" "}
                    Artificial Intelligence{" "}
                  </span>
                </span>
                <span>
                  and
                  <span className="text-foreground"> Machine Learning </span>. I
                  want to use my skills of{" "}
                </span>
                <span>
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
                </span>
              </div>
            </div>
          </Vortex>
        </section>
      </FadeInOnce>
      <FadeInOnce>
        <SkillsSection />
      </FadeInOnce>
      <FadeInOnce>
        <ProjectSection />
      </FadeInOnce>
      <FadeInOnce>
        <Experiences />
      </FadeInOnce>
      <ScrollImage className="sm:block " />
      <Footer className="animate-fadeUp" />
    </div>
  );
}
