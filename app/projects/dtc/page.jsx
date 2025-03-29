import React from "react";
import Header from "@/components/DTC/Header";
import Hero from "@/components/DTC/Hero";
import Features from "@/components/DTC/Features";
import HowItWorks from "@/components/DTC/HowItWorks";
import Technology from "@/components/DTC/Technology";
import Footer from "@/app/components/Footer";

const Page = () => {
  return (
    <div className="min-h-screen bg-background font-jetbr">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <HowItWorks />
        <Features />
        <Technology />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
