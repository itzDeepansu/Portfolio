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
} from "../../components/icons/icon";

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
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-10 gap-40 pl-16"
      ref={containerRef}
    >
      <div
        ref={div1Ref}
        className="flex items-center justify-center w-20 h-20 rounded-full  z-10 -translate-x-16 bg-background"
      >
        <WWWIcon />
      </div>
      <div className="flex size-full flex-col items-center justify-between gap-2">
        <div
          ref={div2Ref}
          className="flex items-center justify-center h-16  z-10 gap-2 bg-background"
        >
          <ReactIcon />
          <div >React</div>
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center h-20  z-10 gap-2 bg-background"
        >
          <ExpressIcon  />
          <div >Express</div>
        </div>
        <div
          ref={div4Ref}
          className="flex items-center justify-center h-20 z-10 gap-2 bg-background"
        >
          <MongodbIcon />
          <div>MongoDB</div>
        </div>
        <div
          ref={div5Ref}
          className="flex items-center justify-center h-20  z-10 gap-2 bg-background"
        >
          <PostgresqlIcon  />
          <div >Postgresql</div>
        </div>
        <div
          ref={div6Ref}
          className="flex items-center justify-center h-20  z-10 gap-2 bg-background"
        >
          <SupabaseIcon />
          <div >Supabase</div>
        </div>
      </div>
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={220}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        curvature={120}
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
        curvature={-120}
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        curvature={-220}
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
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-10 gap-40 pr-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-center justify-between gap-2 mr-12">
        <div
          ref={div2Ref}
          className="flex items-center justify-center h-16  z-10 gap-1 bg-background"
        >
          <div >Next.js</div>
          <NextjsIcon  />
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center h-20  z-10 gap-1 bg-background"
        >
          <div >Socket.IO</div>
          <SocketioIcon  />
        </div>
        <div
          ref={div4Ref}
          className="flex items-center justify-center h-20  z-10 gap-1 bg-background"
        >
          <div >Redis</div>
          <RedisIcon  />
        </div>
        <div
          ref={div5Ref}
          className="flex items-center justify-center h-20  z-10 gap-1 bg-background"
        >
          <div >Docker</div>
          <DockerIcon  />
        </div>
        <div
          ref={div6Ref}
          className="flex items-center justify-center h-20  z-10 gap-1 bg-background"
        >
          <div >Kubernetes</div>
          <KubernetesIcon  />
        </div>
      </div>
      <div
        ref={div1Ref}
        className="flex items-center justify-center w-20 h-20 rounded-full  z-10 translate-x-5 bg-background"
      >
        <WWWIcon />
      </div>

      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={160}
        reverse
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        curvature={100}
        reverse
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={1}
        reverse
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
        curvature={-100}
        reverse
      />
      <AnimatedBeam
        duration={7}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        curvature={-160}
        reverse
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
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-10 gap-40 pr-10"
      ref={containerRef}
    >
      <div
        ref={div1Ref}
        className="flex items-center justify-center w-20 h-20 rounded-full  z-10 translate-x-5 bg-background"
      >
        <AIIcon className="bg-background" />
      </div>
      <div className="flex size-full flex-col items-center justify-between gap-2 mr-12">
        <div
          ref={div2Ref}
          className="flex items-center justify-center h-12  z-10 gap-1 bg-background"
        >
          <div >Python</div>
          <PythonIcon  />
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center h-20  z-10 gap-1 bg-background"
        >
          <div >Pandas</div>
          <PandasIcon  />
        </div>
        <div
          ref={div4Ref}
          className="flex items-center justify-center h-20  z-10 gap-1 bg-background"
        >
          <div >TensorFlow</div>
          <TensorflowIcon  />
        </div>
        <div
          ref={div5Ref}
          className="flex items-center justify-center  h-20  z-10 gap-1 bg-background"
        >
          <div >Keras</div>
          <KerasIcon  />
        </div>
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
        className="flex items-center justify-center w-20 h-20 rounded-full  z-20 -translate-x-16 hover:shadow-foreground "
      >
        <BlockchainIcon className="bg-background" />
      </div>
      <div className="flex size-full flex-col items-center justify-between gap-28">
        <div
          ref={div2Ref}
          className="flex items-center justify-center gap-2 h-16 z-20"
        >
          <ConfluxIcon className="bg-background" />
          <div className="bg-background">Conflux</div>
        </div>
        <div
          ref={div3Ref}
          className="flex items-center justify-center gap-2 h-20 z-0"
        >
          <SolanaIcon className="bg-background" />
          <div className="bg-background">Solana</div>
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