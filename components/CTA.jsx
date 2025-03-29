import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
const CTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden font-jetbr">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-2xl p-8 md:p-12 relative z-10 overflow-hidden">
          {/* Background effects */}
          <div className="animate-pulse absolute -top-24 -right-24 w-64 h-64 bg-primarysecond/60 rounded-full filter blur-[80px] opacity-50"></div>
          <div className="animate-pulse absolute -bottom-24 -left-24 w-64 h-64 bg-red-600/30 rounded-full filter blur-[80px] opacity-50"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Communication?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Experience the power of real-time messaging with XZIST today.
            </p>
            <div className="animate-pulse">
              <Link 
                href="/test?lastpage=xist" 
                className="inline-flex items-center justify-center space-x-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/20"
              >
                <span>Try XZIST Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
