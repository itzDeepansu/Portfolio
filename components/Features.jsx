import React, { useEffect, useRef } from 'react';
import { MessageSquare, FileImage, ShieldCheck, Database, CloudLightning } from 'lucide-react';
import FeatureCard from './FeatureCard';
const features = [
  {
    title: 'Instant Messaging',
    description: 'Real-time text communication with zero latency, powered by WebSockets for instantaneous message delivery.',
    icon: <MessageSquare className="h-12 w-12 text-primarysecond" />,
    delay: 0
  },
  {
    title: 'File & Media Sharing',
    description: 'Seamlessly share images, videos, and files with drag-and-drop simplicity and preview capabilities.',
    icon: <FileImage className="h-12 w-12 text-primarysecond" />,
    delay: 100
  },
  {
    title: 'Secure Authentication',
    description: 'Enterprise-grade security with end-to-end encryption ensuring your conversations remain private.',
    icon: <ShieldCheck className="h-12 w-12 text-primarysecond" />,
    delay: 200
  },
  {
    title: 'Scalable Backend',
    description: 'Built on Node.js and Supabase for reliability and performance, even with millions of concurrent users.',
    icon: <Database className="h-12 w-12 text-primarysecond" />,
    delay: 300
  },
  {
    title: 'WebSockets for Real-Time',
    description: 'Socket.io integration provides live typing indicators, status updates, and instant notifications.',
    icon: <CloudLightning className="h-12 w-12 text-primarysecond" />,
    delay: 400
  }
];



const Features = () => {
  return (
    <section id="features" className="py-24 relative font-jetbr">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            XZIST combines cutting-edge technology with intuitive design to deliver
            a messaging experience that&apos;s both powerful and easy to use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
      
      {/* Gradient effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primarysecond/30 rounded-full filter blur-[120px] opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Features;
