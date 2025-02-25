"use client";

import React from "react";
import Avatar from "@/components/Avatar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Page = () => {
  return (
    <div className="h-[10000px] w-full flex items-center justify-center relative">
      <div className="h-full w-full fixed bottom-0">
        <Canvas>
          {/* Lighting for better model visibility */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          {/* Add Controls to rotate and zoom */}
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

          {/* Render Avatar Model */}
          <group position-y={-10.5}>
            <Avatar />
          </group>
        </Canvas>
      </div>
    </div>
  );
};

export default Page;
