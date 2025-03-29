import React, { useEffect, useRef } from 'react';

const technologies = [
  {
    name: 'Next.js',
    description: 'The React framework that powers XZIST, providing server-side rendering and optimized performance.',
    icon: '/tech-nextjs.svg',
    color: 'bg-black',
    textColor: 'text-white'
  },
  {
    name: 'React',
    description: 'The foundation of our UI, enabling interactive components and a seamless user experience.',
    icon: '/tech-react.svg',
    color: 'bg-blue-500/10',
    textColor: 'text-blue-400'
  },
  {
    name: 'Node.js',
    description: 'Powers our backend services with high-performance, event-driven architecture.',
    icon: '/tech-nodejs.svg',
    color: 'bg-green-500/10',
    textColor: 'text-green-400'
  },
  {
    name: 'Supabase',
    description: 'Our database and authentication provider, offering real-time capabilities and robust security.',
    icon: '/tech-supabase.svg',
    color: 'bg-emerald-500/10',
    textColor: 'text-emerald-400'
  },
  {
    name: 'Socket.io',
    description: 'Enables bidirectional event-based communication for real-time features like typing indicators and presence.',
    icon: '/tech-socketio.svg',
    color: 'bg-gray-500/10',
    textColor: 'text-gray-400'
  }
];

const TechCard = ({ tech, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', 'scale-95');
            entry.target.classList.add('opacity-100', 'scale-100');
          }, index * 100);
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
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="glass rounded-xl p-6 transition-all duration-500 ease-out opacity-0 scale-95 hover:shadow-lg hover:shadow-primary/10 font-jetbr"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-10 h-10 rounded-md ${tech.color} flex items-center justify-center`}>
          <div className={`text-xl font-bold ${tech.textColor}`}>
            {tech.name.charAt(0)}
          </div>
        </div>
        <h3 className="text-xl font-bold">{tech.name}</h3>
      </div>
      <p className="text-foreground/70">{tech.description}</p>
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="tech" className="py-24 relative overflow-hidden font-jetbr">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge Technology</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            XZIST is built on a robust stack of modern technologies, ensuring speed,
            reliability, and a seamless experience across all devices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px] opacity-20"></div>
    </section>
  );
};

export default TechStack;