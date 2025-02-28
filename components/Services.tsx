"use client";

import { useState, useEffect } from "react";
import { Code, BarChart3, Globe, PenTool } from "lucide-react";

const Services = () => {
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

    const element = document.getElementById("services-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const services = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analytics/Engineering",
      description:
        "Transforming raw data into actionable insights that drive business decisions.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Building exceptional web applications with modern technologies.",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Artificial Intellience",
      description:
        "Ultization of AI to automate business workflows, processes.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web & Mobile Apps",
      description:
        "Creating responsive web and mobile applications with seamless user experiences.",
    },
  ];

  return (
    <section
      id="services-section"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Services
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Collaborate with businesses and agencies
            <br />
            to create impactful results.
          </h2>
          {/* <div
            className={`inline-block px-4 py-2 bg-white rounded-full text-sm shadow-sm mb-12 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Services
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-8 rounded-3xl shadow-sm border border-border/50 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="rounded-xl inline-flex items-center justify-center w-12 h-12 bg-secondary mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
