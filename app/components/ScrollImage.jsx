"use client";
import { useState, useEffect } from "react";

const ScrollImage = () => {
  const [imageSources, setImageSources] = useState([]);
  const [visibleImage, setVisibleImage] = useState("");

  useEffect(() => {
    const sources = [];
    for (let i = 1; i <= 220; i++) {
      const imageNumber = String(i).padStart(4, "0");
      sources.push(`/images/male${imageNumber}.png`);
    }
    setImageSources(sources);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTopPercentage = Math.floor(
        (scrollTop * 100 * 2.1) / (documentHeight - windowHeight)
      );

      preloadAndDisplayImage(scrollTopPercentage);
    };

    // Call once on mount to load the initial image
    preloadAndDisplayImage(1);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageSources]);

  const preloadAndDisplayImage = (index) => {
    const nextImage = imageSources[index];
    if (!nextImage) return;

    const img = new Image();
    img.src = nextImage;

    img.onload = () => {
      setVisibleImage(nextImage); // Update visible image only after preload
    };
  };

  return (
    <div className="relative">
      <img
        src={visibleImage}
        className="fixed bottom-0 h-[80dvh] opacity-100"
        style={{
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      />
    </div>
  );
};

export default ScrollImage;