// // components/ScrollAnimationCanvas.js
// "use client"
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const ScrollAnimationCanvas = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       gsap.registerPlugin(ScrollTrigger);

//       // Canvas setup
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");

//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       const frameCount = 300;
//       const images = [];
//       const imageSeq = { frame: 1 };

//       function files(index) {
//         return `/images/male${String(index + 1).padStart(4, "0")}.png`;
//       }

//       for (let i = 0; i < frameCount; i++) {
//         const img = new Image();
//         img.src = files(i);
//         images.push(img);
//       }

//       gsap.to(imageSeq, {
//         frame: frameCount - 1,
//         snap: "frame",
//         ease: "none",
//         scrollTrigger: {
//           trigger: canvas,
//           start: "top top",
//           end: "3344px top",
//           scrub: 0.29,
//         },
//         onUpdate: render,
//       });

//       images[1].onload = render;

//       function render() {
//         scaleImage(images[imageSeq.frame], context);
//       }

//       function scaleImage(img, ctx) {
//         const canvas = ctx.canvas;
//         const hRatio = canvas.width / img.width;
//         const vRatio = canvas.height / img.height;
//         const ratio = Math.max(hRatio, vRatio);
//         const centerShift_x = (canvas.width - img.width * ratio) / 2;
//         const centerShift_y = (canvas.height - img.height * ratio) / 2;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(
//           img,
//           0,
//           0,
//           img.width,
//           img.height,
//           centerShift_x,
//           centerShift_y,
//           img.width * ratio,
//           img.height * ratio
//         );
//       }

//       // Handle resizing
//       const handleResize = () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         render();
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//         <canvas ref={canvasRef} className="fixed bottom-0" style={{
//           left: "50%",
//           transform: "translate(-50%, 0%)",
//           height: "620px", // You can adjust height as needed  // You can adjust width as needed
//         }}></canvas>
//     </div>
//   );
// };

// export default ScrollAnimationCanvas;
