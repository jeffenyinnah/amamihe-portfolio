"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="about-section"
      className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
                alt="About me"
                className="rounded-3xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-sm border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold">
                    5+
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Years of</p>
                    <p>Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Data Analytics Consultant & Web Developer
            </h2>
            <p className="text-muted-foreground mb-4">
              As a data analytics consultant and web developer, I bridge the gap
              between data insights and digital implementation. With a passion
              for creating impactful solutions, I help businesses transform
              their data into actionable strategies and build web applications
              that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              My approach combines analytical expertise with technical skills to
              develop comprehensive solutions that address real business
              challenges. Whether you&apos;re looking to gain deeper insights
              from your data or create a stunning web application, I&apos;m here
              to help you achieve your goals.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-all hover:bg-primary/90 hover:gap-3"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
