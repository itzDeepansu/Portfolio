import React from "react";
import { BadgePlus, Database, CircuitBoard, BarChart3 } from "lucide-react";

const TechItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center glass rounded-xl shadow-lg hover:scale-105 transition-all duration-700">
      <div className="mb-4 rounded-full bg-muted p-3">{icon}</div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};

const Technology = () => {
  return (
    <section
      className="pt-16 pb-32"
      id="dtctechnology"
    >
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Technology Stack</h2>
          <p className="mt-4 text-muted-foreground">
            Built with modern tools for reliability and scalability
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 px-10">
          <TechItem
            icon={<BadgePlus size={24} className="text-orange-500" />}
            title="Python"
            description="Core language for ML algorithms and data processing pipelines"
          />
          <TechItem
            icon={<Database size={24} className="text-orange-500" />}
            title="MongoDB"
            description="Flexible document database for storing complex transit data"
          />
          <TechItem
            icon={<CircuitBoard size={24} className="text-orange-500" />}
            title="Machine Learning"
            description="Custom models trained on transportation patterns"
          />
          <TechItem
            icon={<BarChart3 size={24} className="text-orange-500" />}
            title="Data Analytics"
            description="Advanced visualization and insight generation tools"
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
