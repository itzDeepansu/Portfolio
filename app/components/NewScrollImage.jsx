"use client";
import { useState, useEffect, useRef } from "react";

const NewScrollImage = () => {
  const canvasRef = useRef(null);
  const [imageSources, setImageSources] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images when component mounts
  useEffect(() => {
    const sources = [];
    const loaded = [];

    for (let i = 1; i <= 220; i++) {
      const imageNumber = String(i).padStart(4, "0");
      const imgSrc = `/images/male${imageNumber}.png`;
      sources.push(imgSrc);

      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        loaded.push(img); // Store image once loaded
        if (loaded.length === sources.length) {
          setLoadedImages(loaded);
        }
      };
    }

    setImageSources(sources);
  }, []);

  // Scroll event to update image based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTopPercentage = Math.floor(
        (scrollTop * 100 * 2.1) / (documentHeight - windowHeight)
      );

      const index = Math.min(scrollTopPercentage, imageSources.length - 1);
      setCurrentImageIndex(index);
    };

    // Initial image render on mount
    if (loadedImages.length > 0) {
      drawImageOnCanvas(0);
    }

    // Scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageSources, loadedImages]);

  // Function to draw the current image on the canvas
  const drawImageOnCanvas = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentImage = loadedImages[index];
    if (canvas && currentImage) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Clear the canvas before drawing the new image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    }
  };

  // Watch for changes in the current image index to update the canvas
  useEffect(() => {
    if (loadedImages.length > 0) {
      drawImageOnCanvas(currentImageIndex);
    }
  }, [currentImageIndex, loadedImages]);

  return (
    <div className="relative z-0">
      {/* Canvas to display the images */}
      <canvas
        ref={canvasRef}
        className="fixed bottom-0"
        style={{
          left: "50%",
          transform: "translate(-50%, 0%)",
          height: "620px", // You can adjust height as needed  // You can adjust width as needed
        }}
      />
    </div>
  );
};

export default NewScrollImage;
