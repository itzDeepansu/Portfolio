"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TypingText from "@/components/animata/text/typing-text.jsx";
import SkillsSection from "./components/SkillsSection";
import { useTheme } from "next-themes";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const { setTheme } = useTheme();
  const [scrollTopper, setScrollTopper] = useState(0);
  setTheme("dark");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img"));
    images.forEach((img) => {
      img.src = `/images/male${String(currentIndex + 1).padStart(4, "0")}.png`; // Replace with your image path
    });
  }, [currentIndex]);

  // let scrollTopper = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTopPercentage = Math.floor(
        (scrollTop * 100 * 2.999) / (documentHeight - windowHeight)
      );

      setCurrentIndex(scrollTopPercentage);
      setScrollTopper(scrollTop);
      console.log(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="image-container h-[5000px] relative mx-10 box-border font-jetbr">
      <Navbar classes="sticky top-0" />
      <section className="h-[80dvh] grid grid-cols-2 gap-96">
        <div className="h-[80dvh] text-7xl overflow-hidden pt-36 pl-10">
          <div className="font-dancing text-9xl">Creative</div>
          <TypingText
            text="Developer."
            waitTime="1200"
            hideCursorOnComplete={true}
            delay={60}
          />
        </div>
        <div className="h-[80dvh] flex flex-col justify-center gap-6 text-sm pl-16">
          <ul className="list-none">
            <li className="text-mutedForeground">
              Hi! I'm Deepansu Siwach , an India based
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
              <span className="text-foreground"> Artificial Intelligence </span>
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
      </section>

      <SkillsSection
        className={`${scrollTopper >= 260 ? "animate-fadeIn" : "hidden"} ${
          scrollTopper >= 1370 ? "animate-fadeOut opacity-0" : ""
        }`}
      />

      <ProjectSection
        className={`${scrollTopper >= 1370 ? "animate-fadeIn" : "hidden"} ${
          scrollTopper >= 1770 ? "animate-fadeOut opacity-0" : ""
        }`}
      />

      <img
        key={currentIndex}
        alt={`Image ${currentIndex}`}
        src={`/images/${currentIndex}.png`}
        className="transition duration-500 ease-in-out fixed bottom-0 h-[80dvh] z-10"
        style={{
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      />
      <Footer classes="w-full fixed bg-red-400" />
    </div>
  );
}
