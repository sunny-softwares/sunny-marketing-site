"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Folder, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants";

const categoryColors: Record<string, string> = {
  "Website Development": "bg-accent/20 text-accent",
  "Custom Software": "bg-primary/10 text-primary",
  "Accounting Software": "bg-green-500/10 text-green-600",
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding bg-background" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Folder size={16} />
            <span>Our Work</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-sunny">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into the diverse solutions we've delivered for our clients across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 rounded-2xl gradient-card border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300"
            >
              {/* Category Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                categoryColors[project.category] || "bg-muted text-muted-foreground"
              }`}>
                {project.category}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              {/* Client */}
              <p className="text-primary/80 text-sm mb-3">{project.client}</p>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
