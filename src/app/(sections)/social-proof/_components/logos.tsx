"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { socialProofProps } from "@/types/propTypes";

const CompanyLogos = ({
  containerVariants,
  itemVariants,
}: socialProofProps) => {
  const companies = [
    { name: "Slack", logo: "https://cdn.simpleicons.org/slack" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
    { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
    { name: "Google", logo: "https://cdn.simpleicons.org/google" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
  ];
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-x-8 md:gap-x-12 mb-12 sm:mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label="Companies using our platform"
    >
      {companies.map((company, index) => (
        <motion.div
          key={index}
          className="opacity-60 hover:opacity-100 transition-all duration-300"
          variants={itemVariants}
        >
          {/* Use a placeholder or actual logo */}
          <div className="w-[30px] h-[30px] sm:w-[80px] sm:h-[80px] md:h-[40px] flex items-center justify-center">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={60}
              height={60}
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CompanyLogos;
