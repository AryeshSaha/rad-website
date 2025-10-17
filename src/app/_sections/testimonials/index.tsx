"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/app/_sections/testimonials/_components/testimonialCard";
import testimonials from "@/constants/dummy-data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute -top-12 -left-12 text-red-500/20 hidden sm:block"
            aria-hidden="true"
          >
            <Quote size={80} />
          </div>

          {/* Mobile quote icon - smaller and centered */}
          <div
            className="sm:hidden flex justify-center mb-4"
            aria-hidden="true"
          >
            <Quote className="h-10 w-10 text-red-500/20" />
          </div>

          <div
            className="min-h-[400px] flex items-center"
            role="region"
            aria-roledescription="testimonial carousel"
            aria-label="Customer testimonials"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8 md:p-12"
                aria-live="polite"
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${current + 1} of ${
                  testimonials.length
                }`}
              >
                <TestimonialCard {...testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls - made more compact on mobile */}
          <div
            className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4"
            aria-label="Testimonial navigation"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-white/10 hover:bg-white/10 focus:ring-2 focus:ring-white focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                className="h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-white/10 hover:bg-white/10 focus:ring-2 focus:ring-white focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight
                className="h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="flex justify-center mt-4 sm:mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(idx);
                }}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 mx-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
                  current === idx
                    ? "bg-gradient-to-r from-red-500 to-amber-500"
                    : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={current === idx ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
