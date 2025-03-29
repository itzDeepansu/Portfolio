"use client"
import React , { useEffect, useRef} from "react";
const FeatureCard = ({ feature, index }) => {
    const cardRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0', 'translate-y-8');
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, feature.delay);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, [feature.delay]);
  
    return (
      <div 
        ref={cardRef}
        className={`glass rounded-xl p-6 transition-all duration-700 ease-out opacity-0 translate-y-8 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/10`}
      >
        <div className="mb-4">{feature.icon}</div>
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-foreground/70">{feature.description}</p>
      </div>
    );
  };
  export default FeatureCard;