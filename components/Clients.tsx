"use client";

import { useState, useEffect } from "react";

const Clients = () => {
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

    const element = document.getElementById("clients-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const clients = [
    { name: "ENGIE Energy Access Mozambique", logo: "text-lg font-bold" },
    { name: "Britam Companhia De Seguros", logo: "text-lg font-medium italic" },
    { name: "GreenWaves Mozambique", logo: "text-lg font-semibold" },
    {
      name: "Nigerian High Commission, Mozambique",
      logo: "text-lg font-bold uppercase",
    },
    { name: "ProjectaJovem", logo: "text-lg font-mono" },
  ];

  return (
    <section
      id="clients-section"
      className="py-16 px-6 md:px-12 lg:px-24 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`flex justify-center transition-all duration-700 delay-${
                index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                filter: "grayscale(1)",
              }}
            >
              <div className={client.logo}>{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
