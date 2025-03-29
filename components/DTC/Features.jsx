import React from "react";
import { Brain, Users, TrendingUp } from "lucide-react";
import FeatureCard from "../FeatureCard";
const features = [
  {
    icon: <Brain size={24} className="text-red-500" />,
    title: "AI-powered Route Optimization",
    description:
      "Leverage machine learning to identify optimal routes based on historical and real-time data patterns.",
    delay: 200,
  },
  {
    icon: <Users size={24} className="text-red-500" />,
    title: "Real-time Crowd Prediction",
    description:
      "Forecast passenger volumes with high accuracy to allocate resources efficiently and reduce overcrowding.",
    delay: 300,
  },
  {
    icon: <TrendingUp size={24} className="text-red-500" />,
    title: "Data-driven Decision Making",
    description:
      "Transform raw transit data into actionable insights with our comprehensive analytics dashboards.",
    delay: 400,
  },
];
const Features = () => {
  return (
    <section className="bg-background py-40 relative" id="dtcfeatures">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="mt-4">
            Our platform combines advanced ML algorithms with transportation
            expertise
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 px-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-400/40 rounded-full filter blur-[120px] opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Features;
