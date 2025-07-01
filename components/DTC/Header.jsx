"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 font-jetbr right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/20 backdrop-blur-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">
              <span className="gradient-text2">TransitOptimizer</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" href="/">Home</Link>
            <a
              href="#dtchero"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Landing
            </a>
            <a
              href="#dtchow-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#dtcfeatures"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </a>

            <a
              href="#dtctechnology"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Technology
            </a>
          </nav>
          <Button disabled className="bg-orange-600 text-white hover:bg-orange-200 hover:text-black">Try DTC</Button>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#technology"
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </a>
              <Button variant="outline" size="sm" className="w-full">
                Github
              </Button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
