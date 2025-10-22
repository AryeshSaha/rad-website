'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { USER_ROUTES } from "@/constants/navigation-data/URLs";

const BlogHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12"
    >
      <div>
        <h2
          id="blog-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
        >
          Latest Insights
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl">
          Expert advice on productivity and technology
        </p>
      </div>
      <Link href={USER_ROUTES.BLOGS} className="mt-6 md:mt-0">
        <Button
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10 text-sm sm:text-base focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          aria-label="View all blog articles"
        >
          View All Articles
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default BlogHeader;
