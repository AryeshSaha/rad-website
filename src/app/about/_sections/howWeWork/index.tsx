"use client";

import Container from "@/components/ui/container";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { howWeWorkData } from "@/constants/data/pageData/how-we-work";
import { motion } from "framer-motion";

export default function HowWeWork() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          How We Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          At <strong className="font-bold">RAD Media Solutions</strong>, our
          approach isn&apos;t just about marketing — it&apos;s about building
          digital ecosystems that drive sustainable success.
        </p>
      </motion.div>
      <StickyScroll content={howWeWorkData} />
    </Container>
  );
}
