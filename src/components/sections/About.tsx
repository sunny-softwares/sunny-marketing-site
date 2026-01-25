"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Target } from "lucide-react";
import { ABOUT, COMPANY } from "@/constants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target size={16} />
              <span>About Us</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {ABOUT.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {ABOUT.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {ABOUT.description}
            </p>

            {/* Mission */}
            <div className="p-6 rounded-2xl gradient-card border border-border shadow-soft">
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {COMPANY.mission}
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {ABOUT.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg gradient-sunny flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Check size={16} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium pt-1">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
