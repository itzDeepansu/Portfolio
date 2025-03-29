"use client"
import React, { useEffect } from 'react';
import ProjectNavbar from '@/components/ProjectNavbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
// import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/app/components/Footer';

const Page = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ProjectNavbar />
      <main>
        <Hero />
        <Features />
        <TechStack />
        {/* <Testimonials /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Page;