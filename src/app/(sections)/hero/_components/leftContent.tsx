"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeftContent = () => {
  return (
    <div className="flex-1 text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm"
      >
        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
        <span className="font-medium">Introducing RAD Media Solutions</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
      >
        <span className="block">Elevate Your</span>
        <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Digital Experience
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
      >
        Transform how you work with our AI-powered platform. Automate workflows,
        gain insights, and boost productivity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col max-w-[80%] mx-auto sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
      >
        <Button
          variant="myTheme"
          className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Button>
        <Button
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
        >
          Watch Demo
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-2 sm:gap-4 flex-wrap sm:flex-nowrap"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-xs"
            >
              {i}
            </div>
          ))}
        </div>
        <div className="text-xs sm:text-sm">
          <span className="text-white/70">Trusted by</span>{" "}
          <span className="font-bold">10,000+</span>{" "}
          <span className="text-white/70">companies</span>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default LeftContent;
