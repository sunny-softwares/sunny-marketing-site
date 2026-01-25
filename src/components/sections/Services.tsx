"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Target, 
  Palette, 
  TrendingUp, 
  Settings, 
  Expand,
  Cloud,
  Smartphone,
  Check,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Palette,
  TrendingUp,
  Settings,
  Expand,
  Cloud,
  Smartphone,
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="container-width">
        {/* Main Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Globe size={16} />
            <span>{SERVICES.main.subtitle}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {SERVICES.main.title}
          </h2>
          <p className="text-lg text-muted-foreground italic mb-4">
            "{SERVICES.main.tagline}"
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {SERVICES.main.description}
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {SERVICES.offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="p-5 rounded-xl gradient-card border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 group"
            >
              <h4 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {offering.title}
              </h4>
              <p className="text-muted-foreground text-sm">{offering.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Why Our Websites <span className="text-gradient-sunny">Stand Out</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.advantages.map((adv, index) => {
              const Icon = iconMap[adv.icon] || Check;
              return (
                <motion.div
                  key={adv.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl gradient-sunny flex items-center justify-center mb-3">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{adv.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            More Digital Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.additional.map((service, index) => {
              const Icon = iconMap[service.icon] || Cloud;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="p-8 rounded-2xl gradient-card border border-border hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-foreground">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="group"
          >
            Discuss Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
