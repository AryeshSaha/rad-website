"use client";

import React from "react";
import { motion } from "framer-motion";
import { socialProofProps } from "@/types/propTypes";

const SocialProofStats = ({
  containerVariants,
  itemVariants,
}: socialProofProps) => {
  const stats = [
    { value: "10k+", label: "Active Users" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Dedicated Support" },
  ];
  return (
    <motion.div
      className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 auto-rows-fr"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label="Key platform statistics"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center h-full"
          variants={itemVariants}
        >
          <div className="relative group h-full">
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"
              aria-hidden="true"
            ></div>
            <div
              className="relative bg-black/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 h-full flex flex-col justify-center"
              role="presentation"
            >
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent mb-1 sm:mb-2 truncate"
                aria-hidden="true"
              >
                {stat.value}
              </div>
              <p
                className="text-white/70 text-sm sm:text-base truncate"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.label}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialProofStats;
