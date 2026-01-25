"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-card" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star size={16} />
            <span>Client Testimonials</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-sunny">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
            <Quote size={48} className="text-primary/20 absolute top-6 left-6" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8 font-medium">
                "{TESTIMONIALS[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full gradient-sunny flex items-center justify-center text-primary-foreground font-bold text-xl mb-3">
                  {TESTIMONIALS[currentIndex].name.charAt(0)}
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {TESTIMONIALS[currentIndex].role}, {TESTIMONIALS[currentIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl gradient-card border border-border hover:shadow-soft transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "{testimonial.content.slice(0, 100)}..."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-sunny flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
