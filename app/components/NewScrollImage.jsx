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

  // Smooth scrolling with requestAnimationFrame
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTopPercentage = Math.floor(
        (scrollTop * 100 * 2.1) / (documentHeight - windowHeight)
      );

      const index = Math.min(scrollTopPercentage, imageSources.length - 1);

      // Use requestAnimationFrame to reduce unnecessary updates
      animationFrameId = requestAnimationFrame(() => {
        setCurrentImageIndex(index);
      });
    };

    if (loadedImages.length > 0) {
      drawImageOnCanvas(0); // Draw the first image when images are loaded
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId); // Clean up the animation frame on unmount
    };
  }, [imageSources, loadedImages]);

  // Function to draw the current image on the canvas
  const drawImageOnCanvas = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentImage = loadedImages[index];
    if (canvas && currentImage) {
      // Set canvas dimensions based on its offsetWidth and offsetHeight
      canvas.width = canvas.offsetWidth || 800;
      canvas.height = canvas.offsetHeight || 620;

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
          height: "620px", // You can adjust height as needed
           // Ensure it scales with the screen width
        }}
      />
    </div>
  );
};

export default NewScrollImage;
