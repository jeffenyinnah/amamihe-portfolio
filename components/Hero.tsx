"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div
          className={`md:w-1/2 text-center md:text-left transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-6 animate-slideUp"
            style={{ animationDelay: "0.1s" }}
          >
            Data Analyst & Web Developer
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slideUp"
            style={{ animationDelay: "0.2s" }}
          >
            Building digital{" "}
            <span className="block md:inline">products. Data Analytics,</span>{" "}
            <span className="block">and Insights.</span>
          </h1>
          <p
            className="text-muted-foreground mb-8 max-w-md mx-auto md:mx-0 animate-slideUp"
            style={{ animationDelay: "0.3s" }}
          >
            Transforming data into insights and designs into exceptional digital
            experiences.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-all hover:bg-primary/90 hover:gap-3 animate-slideUp"
            style={{ animationDelay: "0.4s" }}
          >
            Let&apos;s talk <ArrowRight size={16} />
          </Link>
        </div>

        <div
          className={`md:w-1/2 flex justify-center md:justify-end transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="relative w-64 h-64 md:w-72 md:h-72 animate-slideUp"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-0 bg-secondary rounded-full"></div>
            <img
              src="/hero.png"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
            <div className="absolute -top-4 -right-4 bg-white px-3 py-1 rounded-full shadow-sm border border-border">
              <span className="text-sm font-medium">AMAMIHE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
