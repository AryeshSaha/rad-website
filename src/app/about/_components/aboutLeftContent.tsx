"use client";

import React from "react";
import { motion } from "framer-motion";
import BgClipText from "@/components/ui/bgClipText";

const AboutLeftContent = () => {
  return (
    <div className="flex-1 text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 sm:mb-6"
      >
        <h6 className="text-base font-bold">SMART DIGITAL SOLUTIONS WITH</h6>
        <BgClipText className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          DATA-DRIVEN STRATEGIES
        </BgClipText>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg text-white/70 mb-8 sm:mb-16 max-w-xl mx-auto lg:mx-0"
      >
        In today&apos;s competitive digital world, businesses need more than creativity—they need results. At RAD Media Solutions, we are a data-driven digital agency dedicated to delivering measurable outcomes for your business. From Search Engine Optimization (SEO) and paid ad campaigns to complete web solutions, we provide tailored strategies that maximize growth and online visibility.
      </motion.p>
    </div>
  );
};

export default AboutLeftContent;
