"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  Award, 
  Clock, 
  Headphones, 
  IndianRupee, 
  Zap 
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Award,
  Clock,
  HeadphonesIcon: Headphones,
  IndianRupee,
  Zap,
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-sunny">Sunny Softwares?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine expertise, innovation, and dedication to deliver solutions that truly make a difference for your business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group p-6 rounded-2xl gradient-card border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-sunny flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-soft">
                  <Icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
