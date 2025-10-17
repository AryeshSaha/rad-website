import SocialProofHeading from "@/app/(sections)/social-proof/_components/heading";
import CompanyLogos from "@/app/(sections)/social-proof/_components/logos";
import SocialProofStats from "@/app/(sections)/social-proof/_components/stats";
import { Variants } from "motion";

export default function SocialProof() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto relative z-10 px-4 md:px-8">
        <SocialProofHeading />

        {/* Company logos */}
        <CompanyLogos
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Stats */}
        <SocialProofStats
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
    </section>
  );
}
