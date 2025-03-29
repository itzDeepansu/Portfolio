import React from "react";
import { Database, LineChart, Route } from "lucide-react";
import { cn } from "@/lib/utils";

const StepItem = ({
  number,
  icon,
  title,
  description,
  isLast = false,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {number}
        </div>
        {!isLast && (
          <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-primary to-primary/0"></div>
        )}
      </div>
      <div className="ml-4 pb-8">
        <div className="mb-2 flex items-center space-x-2">
          <div className="rounded-md bg-muted p-1.5 text-muted-foreground">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-20 animate-fadeIn" id="dtchow-it-works">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-muted-foreground">
            Our three-step approach to optimizing public transportation
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <StepItem
            number={1}
            icon={<Database size={20} className="text-red-500"/>}
            title="Collect Data"
            description="We gather historical transit data, real-time passenger information, and environmental factors that impact transport patterns. It mainly comes from the ticketing data from the City."
          />
          <StepItem
            number={2}
            icon={<LineChart size={20} className="text-red-500"/>}
            title="Predict Demand"
            description="Our ML algorithms analyze the collected data to forecast passenger volumes and identify peak demand periods and areas with high accuracy."
          />
          <StepItem
            number={3}
            icon={<Route size={20} className="text-red-500"/>}
            title="Optimize Routes"
            description="Based on predictive analytics, we generate optimized route plans that reduce wait times (increase frequency of buses) and maximize resource utilization."
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;