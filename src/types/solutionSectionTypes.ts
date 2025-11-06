import { LucideIcon } from "lucide-react";

export const SOLUTION_SECTION_TYPES = {
  CONTENT_IMAGE: "content-image",
  CONTENT_FULL_WIDTH: "content-full-width",
  FEATURE_CARDS: "feature-cards",
  FAQS: "faq",
} as const;

/**
 * Type for the floating cards used in the 'feature-cards' section.
 */
export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Type for an FAQ item used in the 'faq' section.
 */
export type FaqItem = {
  q: string;
  a: string;
};

export type SectionType = SectionData['type'];
export type ComponentMapType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in SectionType]: React.ComponentType<any>;
};

/**
 * Union Type for the specific structure of a single section object.
 * The 'type' acts as a discriminant for the 'data' payload.
 */
export type SectionData =
  | {
      type: "content-image";
      data: {
        heading: string;
        body: string | string[];
        image: string;
        alt: string;
        aspectRatio: string;
        imagePosition: "left" | "right";
      };
    }
  | {
      type: "content-full-width";
      data: {
        heading: string;
        body: string | string[];
      };
    }
  | {
      type: "feature-cards";
      data: {
        heading: string;
        subheading: string;
        cards: FeatureCard[];
      };
    }
  | {
      type: "faq";
      data: {
        questions: FaqItem[];
      };
    };
