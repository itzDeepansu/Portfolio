"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function TestPage() {
  const searchParams = useSearchParams();
  const lastpage = searchParams.get("lastpage");

  return (
    <div className="flex flex-col justify-center items-center text-3xl h-screen w-screen">
      <div>Will Deploy Soon</div>
      <Link href={`/projects/${lastpage}`} className="underline text-blue-400">
        Back
      </Link>
      <Link href="/" className="underline text-blue-400">
        Home
      </Link>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primarysecond/30 rounded-full filter blur-[120px] opacity-30 pointer-events-none animate-pulse"></div>
    </div>
  );
}

// Wrap the component inside Suspense
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestPage />
    </Suspense>
  );
}
