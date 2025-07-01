"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollAnimationCanvas = ({ className }) => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 300;
    const images = new Array(frameCount);
    const imageSeq = { frame: 0 };

    const files = (index) => `/images/male${String(index + 1).padStart(4, "0")}.webp`;

    // Step 1: Load first 50 images
    let loadedInitial = 0;

    for (let i = 0; i < 50; i++) {
      const img = new Image();
      img.src = files(i);
      img.onload = () => {
        images[i] = img;
        loadedInitial++;
        if (loadedInitial === 50) {
          setIsLoading(false);
          render(); // Initial render
          setupScroll();
          preloadRemainingImages(); // Step 2: Load remaining
        }
      };
    }

    // Step 2: Lazy load remaining images in order
    const preloadRemainingImages = () => {
      for (let i = 50; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        img.onload = () => {
          images[i] = img;
        };
      }
    };

    // Step 3: Scroll animation setup
    const setupScroll = () => {
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: canvas,
          start: "top top",
          end: "3344px top",
          scrub: 0.29,
        },
        onUpdate: render,
      });
    };

    const render = () => {
      const img = images[Math.round(imageSeq.frame)];
      if (img) scaleImage(img, context);
    };

    const scaleImage = (img, ctx) => {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }} className={className}>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-10">
          <span className="text-xl animate-pulse">Loading...</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="fixed bottom-0 -z-10"
        style={{
          left: "50%",
          transform: "translate(-50%, 0%)",
          height: "620px",
          display: isLoading ? "none" : "block",
        }}
      ></canvas>
    </div>
  );
};

export default ScrollAnimationCanvas;
