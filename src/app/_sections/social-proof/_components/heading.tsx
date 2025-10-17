"use client";

import React from "react";
import { motion } from "framer-motion";

const SocialProofHeading = () => {
  return (
    <motion.div
      className="text-center mb-10 sm:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-base sm:text-lg text-amber-400 font-medium mb-2">
        Trusted by industry leaders
      </p>
      <h2
        id="social-proof-heading"
        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
      >
        Join thousands of satisfied customers
      </h2>
    </motion.div>
  );
};

export default SocialProofHeading;
