"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedProjects = () => {
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

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "Data Visualization Dashboards",
      category: "Data Analytics",
      image: "/tableau.png",
      description: "Interactive dashboards for visualizing complex datasets.",
    },
    {
      title: "Mozambique Wildlife Mapbox GL JS Demo",
      category: "Web Development",
      image: "/mozambique.png",
      description:
        "An interactive demo application showcasing wildlife locations, projects, project status, funding in Mozambican provinces using Mapbox GL JS and Nextjs.",
    },
    {
      title: "Conversational Data Explorer Tool",
      category: "Data Analytics",
      image: "/data-explorer.png",
      description:
        "Upload your CSV file and chat with your data using natural language.",
    },
  ];

  return (
    <section
      id="projects-section"
      className="py-24 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div
              className={`inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Portfolio
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className={`inline-flex items-center gap-2 mt-4 md:mt-0 text-sm font-medium transition-all duration-500 delay-200 hover:gap-3 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group overflow-hidden rounded-3xl border border-border/50 transition-all duration-700 card-hover ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-medium shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                >
                  View project <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
