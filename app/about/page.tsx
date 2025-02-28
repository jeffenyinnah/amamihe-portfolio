"use client";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      role: "Stakeholder & Data Consultant",
      company: "Trans African Centre for Development (TRACED)",
      period: "April 2024 - Present",
      description:
        "Develop and maintain reports, dashboards, and presentations using Tableau, Power BI, Streamlit, and Python. Build and optimize data pipelines, automate workflows, and ensure data accuracy. Spearheaded the development of an auto insurance management system and a real-time M-Pesa analytics dashboard.",
    },
    {
      role: "Data Engineer",
      company: "Engie Energy Access Mozambique",
      period: "March 2023 - February 2024",
      description:
        "Analyzed customer finance data to extract insights, trends, and patterns, improving payment trend identification by 15%. Built data pipelines using Apache Airflow and conducted HR analytics training. Performed Quarterly Attrition Analysis and Employee Net Promoter Score (eNPS) to measure employee satisfaction.",
    },
    {
      role: "Junior Data Analyst",
      company: "Engie Energy Access Nigeria",
      period: "July 2021 - March 2023",
      description:
        "Performed data cleaning, maintained databases, and updated dashboards to track KPIs. Generated reports and dashboards to communicate findings and recommendations to stakeholders. Conducted data collection and analysis to improve operational efficiency.",
    },
    {
      role: "Freelance Consultant",
      company: "Innovative Ideas Agency",
      period: "January 2020 - February 2021",
      description:
        "Cleaned and standardized data, built ETL pipelines, and created interactive dashboards using Excel and SQL. Developed websites and provided IT training to improve productivity and minimize downtime.",
    },
    {
      role: "Web Developer",
      company: "Ologa Sistemas Informáticos",
      period: "December 2017 - April 2019",
      description:
        "Assisted in building a Medical Record System using Python Django and React. Developed custom dashboards in Power BI and designed responsive websites using HTML/CSS, JavaScript, and WordPress.",
    },
  ];

  const skills = [
    {
      category: "Data Analysis",
      items: ["Python", "R", "SQL", "MySQL", "Google Big Query", "Excel"],
    },
    {
      category: "Data Visualization",
      items: ["Tableau", "Power BI", "Looker Studio"],
    },
    {
      category: "Data Engineering",
      items: ["ETL", "Apache Airflow", "AWS (EC2, S3, Glue, Athena)"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "React", "Python Django", "Next.js"],
    },
    {
      category: "Cloud & Tools",
      items: ["AWS", "Git", "Docker", "Office 365", "Figma"],
    },
  ];

  return (
    <div className="bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data Analytics Consultant <br /> & Web Developer
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming data into insights and designs into exceptional digital
            experiences.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
              alt="About me"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              My Journey so far ...
            </h2>
            <p className="text-muted-foreground mb-4">
              With over{" "}
              <span className="font-bold">
                6 years of experience in data analytics, data engineering, and
                web development
              </span>
              , I specialize in transforming raw data into actionable insights
              and building impactful digital solutions. My expertise spans{" "}
              <span className="font-bold">
                data analysis, visualization, and pipeline automation,
              </span>{" "}
              as well as designing and developing responsive web applications.
            </p>
            <p className="text-muted-foreground mb-4">
              I have a strong background in computer science and hands-on
              experience with tools like{" "}
              <span className="font-bold">
                Python, SQL, Tableau, Power BI, and Apache Airflow.
              </span>{" "}
              My work has helped organizations like{" "}
              <span className="font-bold">Engie Energy Access and TRACED</span>{" "}
              improve operational efficiency, enhance customer satisfaction, and
              make data-driven decisions.
            </p>
            <p className="text-muted-foreground">
              I am passionate about solving complex problems through{" "}
              <span className="font-bold">
                data-driven approaches and creating user-centered web
                applications
              </span>{" "}
              that deliver exceptional experiences. My goal is to empower
              businesses with the tools and insights they need to thrive in a
              data-driven world.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div
          className="mb-24 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
              Experience
            </div>
            <h2 className="text-3xl font-bold">Professional Journey</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-12 animate-fadeIn"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm font-medium bg-secondary inline-block px-3 py-1 rounded-full">
                    {exp.period}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-fadeIn" style={{ animationDelay: "1.2s" }}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
              Skills
            </div>
            <h2 className="text-3xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 animate-fadeIn"
                style={{ animationDelay: `${1.4 + index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold mb-6">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
