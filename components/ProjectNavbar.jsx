import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
const ProjectNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastSegment, setLastSegment] = useState("");
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const parts = window.location.pathname.split("/").filter(Boolean); // Remove empty parts
      setLastSegment(parts.pop() || "home"); // Fallback to 'home' if empty
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 font-jetbr right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/20 backdrop-blur-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-primarysecond" />
          <span className="text-xl font-bold tracking-tight gradient-text">
            {lastSegment}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
        <Link
            href="/"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
        <a
            href="#hero"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Landing
          </a>
          <a
            href="#features"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#tech"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Technology
          </a>
         
        </div>

        <div>
          <Link
            href="/test?lastpage=xist"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primarysecond px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 hover:text-primarysecond focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Try {lastSegment}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
