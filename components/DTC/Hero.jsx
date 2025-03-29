import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28" id="dtchero">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="animate-fadeDown">
            <div className="animate-fade-in space-y-4">
              <div className="inline-block rounded-full bg-muted px-4 py-1.5">
                <span className="text-sm font-medium">
                  Revolutionizing Public Transit
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="gradient-text2">TransitOptimizer</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
                Leveraging machine learning to transform public transportation
                networks with predictive analytics and intelligent route
                planning.
              </p>
            </div>
            <div className="space-x-4 pt-6">
              <Button
                size="lg"
                variant="outline"
              >
                Link
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Github Repo
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl shadow-xl animate-fadeUp">
            <div className="bg-gradient-to-br from-transit-blue/10 via-transit-purple/10 to-transit-teal/10 aspect-[16/9] w-full overflow-hidden rounded-xl">
              <div className="flex justify-center h-full">
                <div className="relative h-64 w-full max-w-2xl animate-pulse-soft">
                  <img src="/projects/DTC/DTC_Landing_Page_DARK.PNG" className="absolute inset-0opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
