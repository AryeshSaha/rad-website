"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HowItWorksCard = ({
  step,
  index,
  length,
}: {
  step: {
    number: string;
    title: string;
    description: string;
    image: string;
  };
  index: number;
  length: number;
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold">
            {step.number}
          </div>
        </div>

        <div className="p-4 sm:p-6 flex-grow flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-sm sm:text-base text-white/70 mb-4 flex-grow">
            {step.description}
          </p>

          {index < length - 1 && (
            <div className="hidden lg:flex items-center justify-end text-amber-400 mt-auto">
              <ArrowRight className="w-5 h-5" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorksCard;
