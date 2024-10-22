"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
// Assuming AnimatedBeam is a component you still need.
import {
  ExpressIcon,
  MongodbIcon,
  PostgresqlIcon,
  ReactIcon,
  SupabaseIcon,
  WWWIcon,
} from "../components/icons/icon";
import { Vortex } from "@/components/ui/vortex";

export default function AnimatedBeamDemoPage() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);

  return (
    <div className="bg-red-900 h-screen w-screen">
      <Vortex
        backgroundColor="black"
        particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div
          className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10"
          ref={containerRef}
        >
          <div
            ref={div1Ref}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md z-10"
          >
            <WWWIcon />
          </div>
          <div className="flex size-full max-w-lg flex-col items-center justify-between">
            <div
              ref={div2Ref}
              className="flex items-center justify-center w-12 h-12 shadow-md z-10"
            >
              <ReactIcon />
            </div>
            <div
              ref={div3Ref}
              className="flex items-center justify-center w-12 h-12 shadow-md z-10"
            >
              <ExpressIcon />
            </div>
            <div
              ref={div4Ref}
              className="flex items-center justify-center w-12 h-12 shadow-md z-10"
            >
              <MongodbIcon />
            </div>
            <div
              ref={div5Ref}
              className="flex items-center justify-center w-12 h-12 shadow-md z-10"
            >
              <PostgresqlIcon />
            </div>
            <div
              ref={div6Ref}
              className="flex items-center justify-center w-12 h-12 shadow-md z-10"
            >
              <SupabaseIcon />
            </div>
          </div>
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div2Ref}
            curvature={100}
          />
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div3Ref}
            curvature={40}
          />
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={0}
          />
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div5Ref}
            curvature={-40}
          />
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div6Ref}
            curvature={-100}
          />
        </div>
      </Vortex>
    </div>
  );
}
