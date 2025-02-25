"use client";

import React, { useRef, useEffect } from "react";
import { useFBX, useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Function to remap animation tracks to GLB bones
const retargetAnimation = (animation) => {
  animation.tracks.forEach((track) => {
    track.name = track.name.replace(/^mixamorig/, ""); // Removes the prefix
  });
};

// Avatar Component to load the 3D model
const Avatar = () => {
  const { scene } = useGLTF("/models/avatar.glb");
  const group = useRef();
  const { camera, mouse } = useThree();
  const { animations: idle } = useFBX("/models/idle3.fbx");
  idle[0].name = "idle";

  const { actions } = useAnimations([idle[0]], group);

  useEffect(() => {
    if (actions && idle[0] && group.current) {
      retargetAnimation(idle[0], group.current);
      actions["idle"]?.reset().play();
      console.log("Animation retargeted and playing");
    }
  }, [actions, idle]);
  // useFrame(() => {
  //   const head = group.current?.getObjectByName("Head");
  //   if (head) {
  //     const target = new THREE.Vector3(
  //       mouse.x * 5,
  //       mouse.y * 5,
  //       camera.position.z
  //     );
  //     console.log(mouse.x, mouse.y);
  //     head.lookAt(target);
  //   }
  // });
  const targetPosition = useRef(new THREE.Vector3());

  useFrame(() => {
    const head = group.current?.getObjectByName("Head");
    if (head) {
      let newTarget = new THREE.Vector3(
        mouse.x * 2, // Adjust sensitivity here too
        mouse.y * 2, // Adjust sensitivity here too
        camera.position.z
      );

      targetPosition.current.lerp(newTarget, 0.06); // Adjust smoothing speed here

      head.lookAt(targetPosition.current);
    }
  });
  useEffect(() => {
    const leftShoulder = group.current?.getObjectByName("LeftShoulder");
    const rightShoulder = group.current?.getObjectByName("RightShoulder");

    if (leftShoulder && rightShoulder) {
      // Move shoulders up by a fixed amount
      leftShoulder.position.y += 0.05; // Adjust this value to control the height
      rightShoulder.position.y += 0.07;
      leftShoulder.position.x += 0.02; // Adjust this value to control the height
      rightShoulder.position.x -= 0.02;
    }
  }, []);

  return (
    <group ref={group} scale={8.2} position={[0, -3, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export default Avatar;
