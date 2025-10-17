'use client'

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
        How It Works
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto">
        Simple four-step process
      </p>
    </motion.div>
  );
};

export default HowItWorksHeading;
