"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
// Assuming AnimatedBeam is a component you still need.
import {
  AIIcon,
  BlockchainIcon,
  ConfluxIcon,
  DockerIcon,
  ExpressIcon,
  KerasIcon,
  KubernetesIcon,
  MongodbIcon,
  NextjsIcon,
  PandasIcon,
  PostgresqlIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  SocketioIcon,
  SolanaIcon,
  SupabaseIcon,
  TensorflowIcon,
  WWWIcon,
} from "./icons/icon";

export function WebSkillsOne() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 gap-40 pl-16"
      ref={containerRef}
    >
      <div
        ref={div1Ref}
        className="flex items-center justify-center w-20 h-20 rounded-full shadow-md z-10 -translate-x-16"
      >
        <WWWIcon />
      </div>
      <div className="flex size-full flex-col items-center justify-between gap-2">
        <div
          ref={div2Ref}
          className="flex items-center justify-center w-16 h-16 shadow-md z-10"
        >
          <ReactIcon />
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <ExpressIcon />
        </div>
        <div
          ref={div4Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <MongodbIcon />
        </div>
        <div
          ref={div5Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <PostgresqlIcon />
        </div>
        <div
          ref={div6Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <SupabaseIcon />
        </div>
      </div>
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={160}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        curvature={100}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={1}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
        curvature={-100}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        curvature={-160}
      />
    </div>
  );
}
export function WebSkillsTwo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 gap-40 pr-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-center justify-between gap-2 mr-12">
        <div
          ref={div2Ref}
          className="flex items-center justify-center w-16 h-16 shadow-md z-10"
        >
          <NextjsIcon />
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <SocketioIcon />
        </div>
        <div
          ref={div4Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <RedisIcon />
        </div>
        <div
          ref={div5Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <DockerIcon />
        </div>
        <div
          ref={div6Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <KubernetesIcon />
        </div>
      </div>
      <div
        ref={div1Ref}
        className="flex items-center justify-center w-20 h-20 rounded-full shadow-md z-10 translate-x-5"
      >
        <WWWIcon />
      </div>

      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={160}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        curvature={100}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={1}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
        curvature={-100}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        curvature={-160}
      />
    </div>
  );
}
export function AISkills() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 gap-40 pr-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-center justify-between gap-2 mr-12">
        <div
          ref={div2Ref}
          className="flex items-center justify-center w-16 h-16 shadow-md z-10"
        >
          <PythonIcon />
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <PandasIcon />
        </div>
        <div
          ref={div4Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <TensorflowIcon />
        </div>
        <div
          ref={div5Ref}
          className="flex items-center justify-center w-20 h-20 shadow-md z-10"
        >
          <KerasIcon />
        </div>
      </div>
      <div
        ref={div1Ref}
        className="flex items-center justify-center w-20 h-20 rounded-full shadow-md z-10 translate-x-5"
      >
        <AIIcon />
      </div>

      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={120}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        curvature={50}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-50}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
        curvature={-120}
      />
    </div>
  );
}
export function BlockChainSkills() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 gap-40 pl-16"
      ref={containerRef}
    >
      <div
        ref={div1Ref}
        className="flex items-center justify-center w-20 h-20 rounded-full shadow-md z-10 -translate-x-16"
      >
        <BlockchainIcon />
      </div>
      <div className="flex size-full flex-col items-center justify-between gap-28">
        <div
          ref={div2Ref}
          className="flex items-center justify-center w-16 h-16 shadow-md z-10 "
        >
          <ConfluxIcon />
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center w-20 h-20 z-10"
        >
          <SolanaIcon />
        </div>
      </div>
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={80}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        curvature={-80}
      />
    </div>
  );
}
