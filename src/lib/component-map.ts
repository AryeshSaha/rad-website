import ContentFullWidth from "@/app/solutions/_components/ContentFullWidth";
import ContentImageSplit from "@/app/solutions/_components/ContentImageSplit";
import FAQSection from "@/app/solutions/_components/FAQSection";
import Features from "@/app/solutions/_components/Features";
import { ComponentMapType } from "@/types/solutionSectionTypes";

export const ComponentMap: ComponentMapType = {
  "content-image": ContentImageSplit,
  "content-full-width": ContentFullWidth,
  "feature-cards": Features,
  faq: FAQSection,
} as const;
