"use client";
import { useState, useEffect } from "react";
const ThirdScrollImage = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  
  const [imageSources, setImageSources] = useState([]);
  useEffect(() => {
    const sources = [];
    for (let i = 1; i <= 300; i++) {
      const imageNumber = String(i).padStart(4, "0");
      sources.push(`/images/male${imageNumber}.png`);
    }
    setImageSources(sources);
  }, []);
  useEffect(() => {
    // const images = Array.from(document.querySelectorAll("img"));
    // images.forEach((img) => {
    //   img.src = `/images/male${String(currentIndex + 1).padStart(4, "0")}.png`; // Replace with your image path
    // });
  }, [currentIndex]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTopPercentage = Math.floor(
        (scrollTop * 100 * 2.999) / (documentHeight - windowHeight)
      );

      setCurrentIndex(scrollTopPercentage);
    //   setScrollTopper(scrollTop);
      console.log(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <img
        key={currentIndex}
        // alt={`Image ${currentIndex}`}
        src={imageSources[currentIndex]}
        className="transition duration-500 ease-in-out fixed bottom-0 h-[80dvh] z-10"
        style={{
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      />
    </div>
  );
};

export default ThirdScrollImage;