"use client";

import React from "react";
import { motion } from "framer-motion";

const HowItWorksHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 sm:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Our Approach
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-6xl mx-auto">
        At RAD Media Solutions, we believe that every brand deserves a
        personalized, data-driven approach to digital success. Our process is
        built on understanding your goals, analyzing market opportunities, and
        implementing strategies that deliver measurable results. With a balance
        of creativity, technology, and AI innovation, we ensure your brand stays
        ahead in the ever-evolving digital landscape.
      </p>
    </motion.div>
  );
};

export default HowItWorksHeading;
