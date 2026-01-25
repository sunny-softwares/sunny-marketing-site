"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Factory, 
  ShoppingBag, 
  Briefcase, 
  Building, 
  Rocket,
  Calculator,
  Users
} from "lucide-react";
import { INDUSTRIES } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Factory,
  ShoppingBag,
  Briefcase,
  Building,
  Rocket,
  Calculator,
  Users,
};

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground">
            Trusted by businesses across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Briefcase;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground text-center">
                  {industry.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
