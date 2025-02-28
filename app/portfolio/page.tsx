"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Portfolio = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Data Visualization Dashboards",
      category: "data-analytics",
      categoryName: "Data Analytics",
      image: "/tableau.png",
      description: "Interactive dashboards for visualizing complex datasets.",
      technologies: ["Tableau", "Python"],
      url: "https://public.tableau.com/app/profile/amamihe.kaiser/vizzes",
    },
    {
      id: 2,
      title: "MPESA Realtime Analytics",
      category: "web-development",
      categoryName: "Web Development",
      image: "/mpesa-report.png",
      description:
        "A saas Realtime M-Pesa Analytics Dashboard for powerfull & Actionable Insights.",
      technologies: ["JavaScript", "Nextjs", "MPESA AI"],
      url: "https://mpesa-pagamentos.vercel.app/",
    },
    {
      id: 3,
      title: "Conversational Data Explorer Tool",
      category: "data-analytics",
      categoryName: "Data Analytics",
      image: "/data-explorer.png",
      description:
        "Upload your CSV file and chat with your data using natural language.",
      technologies: ["Python", "HuggingFace", "AI"],
      url: "https://conversational-data-explorer.streamlit.app/",
    },
    {
      id: 4,
      title: "Zinta: AI-Powered Meeting Transcription",
      category: "web-development",
      categoryName: "Web Development",
      image: "/zinta.png",
      description: "AI-Powered Meeting Transcription.",
      technologies: ["JavaScript", "Nextjs", "React", "OPENAI", "HuggingFace"],
      url: "https://zinta.jferson.com/",
    },
    {
      id: 5,
      title: "Joaquina: A safe space to share, support, and heal together.",
      category: "web-development",
      categoryName: "Web Development",
      image: "/joaquina.png",
      description:
        "Full-featured online community and A safe space to share, support, and heal together.",
      technologies: ["React", "Node.js", "MongoDB", "Nextjs"],
      url: "https://joaquina.vercel.app/",
    },
    {
      id: 6,
      title: "Financial Analytics Tool",
      category: "data-analytics",
      categoryName: "Data Analytics",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop",
      description:
        "Predictive analytics system for financial market analysis and forecasting.",
      technologies: ["Python", "R", "Machine Learning", "SQL"],
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "web-development",
      categoryName: "Web Development",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
      description:
        "Custom portfolio website with smooth animations and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 8,
      title: "Sales Prediction Model",
      category: "data-analytics",
      categoryName: "Data Analytics",
      image:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
      description:
        "Machine learning model to predict sales trends and optimize inventory management.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    },
    {
      id: 9,
      title: "More Projects",
      category: "git-hub",
      categoryName: "Github",
      image: "/github.png",
      description:
        "List of More Projects for Data Analytics, Web Development, PowerBI projects.",
      technologies: [
        "Python",
        "PowerBI",
        "Node.js",
        "MongoDB",
        "JWT",
        "Nextjs",
        "AI",
      ],
      url: "https://github.com/jeffenyinnah",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Recent Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in data analytics and web development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex justify-center mb-12 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="inline-flex p-1 bg-secondary rounded-full">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "all" ? "bg-white shadow-sm" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "data-analytics" ? "bg-white shadow-sm" : ""
              }`}
              onClick={() => setFilter("data-analytics")}
            >
              Data Analytics
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "web-development" ? "bg-white shadow-sm" : ""
              }`}
              onClick={() => setFilter("web-development")}
            >
              Web Development
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "git-hub" ? "bg-white shadow-sm" : ""
              }`}
              onClick={() => setFilter("git-hub")}
            >
              Github
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group overflow-hidden rounded-3xl border border-border/50 transition-all duration-700 card-hover ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-medium shadow-sm">
                    {project.categoryName}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                  href={project.url || "#"}
                >
                  View details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div
          className="mt-20 text-center animate-fadeIn"
          style={{ animationDelay: "1.2s" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's collaborate to create impactful data solutions and exceptional
            web experiences.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-all hover:bg-primary/90 hover:gap-3"
          >
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
