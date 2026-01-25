"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, Receipt, FileCheck, Truck, Check, Monitor } from "lucide-react";
import { PRODUCTS } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Receipt,
  FileCheck,
  Truck,
};

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-background" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Monitor size={16} />
            <span>Desktop Software Solutions</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Software <span className="text-gradient-sunny">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Customizable desktop applications tailored to your unique business workflow. Each product is designed to integrate seamlessly with your existing processes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon] || Calculator;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 hover-lift ${
                  product.highlight
                    ? "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
                    : "gradient-card border-border hover:border-primary/20"
                }`}
              >
                {product.highlight && (
                  <div className="absolute -top-3 left-8 px-3 py-1 rounded-full gradient-sunny text-primary-foreground text-xs font-medium">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    product.highlight ? "gradient-sunny" : "bg-primary/10"
                  }`}>
                    <Icon size={28} className={product.highlight ? "text-primary-foreground" : "text-primary"} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            All products are fully customizable to match your specific business requirements.{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contact us for a demo →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
