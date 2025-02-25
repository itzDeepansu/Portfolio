"use client";

import React, { memo } from "react"; // Import memo
import Avatar from "@/components/Avatar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const AvatarComp = memo(({ className }) => { // Wrap with memo
  return (
    <div className={className}>
      <Canvas>
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
  );
}); // Close memo wrapper

export default AvatarComp;