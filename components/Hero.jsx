import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ChatMessage = ({ sender, message, align }) => (
  <div className={`flex ${align === 'right' ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${
      align === 'right' 
        ? 'bg-primarysecond text-primary rounded-tr-none' 
        : 'bg-secondary text-secondary-foreground rounded-tl-none'
    }`}>
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-12 md:pb-24 overflow-hidden font-jetbr">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fadeDown">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Experience Real-Time Chat <span className="gradient-text">Like Never Before</span>
            </h1>
            <p className="text-lg text-foreground/80 md:w-[90%]">
              XZIST is a WebSockets-based messaging platform that lets you send text, files, images, and videos seamlessly.
            </p>
            <div className="pt-4">
              <a 
                href="#cta" 
                className="inline-flex items-center justify-center space-x-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/20"
              >
                <span>Try XZIST Now</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className={`glass rounded-2xl p-4 transition-all duration-1000 ${
            animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-background/60 rounded-xl p-4 shadow-inner">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primarysecond flex items-center justify-center">
                    <span className="text-primary font-bold">X</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">XZIST Chat</p>
                    <p className="text-xs text-foreground/60">Online</p>
                  </div>
                </div>
                <div className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">
                  Live
                </div>
              </div>
              
              <div className="space-y-2 h-[300px] overflow-y-auto py-2">
                <ChatMessage 
                  sender="Sarah" 
                  message="Hey team! Just sent over those design files you requested." 
                  align="left" 
                />
                <ChatMessage 
                  sender="You" 
                  message="Thanks Deepansu! Getting them now in real-time. Love how fast XZIST is!" 
                  align="right" 
                />
                <ChatMessage 
                  sender="Michael" 
                  message="The WebSocket connection makes everything so smooth. No more refreshing!" 
                  align="left" 
                />
                <ChatMessage 
                  sender="You" 
                  message="Absolutely! And being able to share files right in the chat is game-changing." 
                  align="right" 
                />
                <ChatMessage 
                  sender="Sarah" 
                  message="Check out this preview of the new feature:" 
                  align="left" 
                />
                <div className="flex justify-start mb-4">
                  <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-none p-1 max-w-[80%]">
                    <div className="w-full h-24 bg-primary/20 rounded-xl flex items-center justify-center">
                      <img className="h-full" src='/projects/XIST/XIST_Login_Page_Dark.PNG'/>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <input 
                  type="text" 
                  className="w-full bg-secondary/50 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50"
                  placeholder="Type a message..."
                />
                <button className="rounded-full p-2 flex-shrink-0 bg-primarysecond">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-48 -right-24 w-96 h-96 bg-blue-600 rounded-full filter blur-[100px] opacity-20"></div>
    </section>
  );
};

export default Hero;
