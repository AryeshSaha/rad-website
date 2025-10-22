"use client";

import { GradientCardProps } from "@/types/propTypes";
import { motion } from "framer-motion";

export default function GradientCard({
  icon: Icon,
  title,
  description,
  className = "",
}: GradientCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative overflow-hidden rounded-2xl border border-zinc-800 
        bg-zinc-900 text-white p-6 flex flex-col items-start justify-start
        transition-all duration-300 group ${className}
      `}
    >
      <div
        className="
          absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 
          opacity-0 translate-y-full group-hover:translate-y-0 
          group-hover:opacity-100 transition-all duration-500 ease-out
        "
      />
      
      <div className="relative z-10 space-y-3">
        <div className="text-4xl text-red-400 group-hover:text-white transition-colors">
          <Icon />
        </div>
        <h2 className="text-xl font-semibold capitalize text-red-400 group-hover:text-white transition-colors">{title}</h2>
        <div className="leading-relaxed">{description}</div>
      </div>
    </motion.div>
  );
}
