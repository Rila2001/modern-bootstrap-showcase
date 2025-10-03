import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      image: portfolio1,
      title: "Modern Web Design",
      category: "Web Development",
    },
    {
      image: portfolio2,
      title: "Mobile App UI",
      category: "UI/UX Design",
    },
    {
      image: portfolio3,
      title: "E-Commerce Platform",
      category: "Web Development",
    },
    {
      image: portfolio4,
      title: "Brand Identity",
      category: "Design",
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              Portfolio
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at some of our recent projects and see how we've helped businesses succeed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 ${
                  hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="text-primary-foreground/80 text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-primary-foreground text-2xl font-bold text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
