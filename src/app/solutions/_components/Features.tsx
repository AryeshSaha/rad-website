import FeatureCardsGrid from "@/components/featureCardsGridWithHover";
import Container from "@/components/ui/container";
import { FeatureCard } from "@/types/solutionSectionTypes";
import React from "react";

const Features = (props: {
  heading: string;
  subheading: string;
  cards: FeatureCard[];
}) => {
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              {props.heading}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              {props.subheading}
            </p>
          </div>
          <FeatureCardsGrid features={props.cards} />
        </div>
      </Container>
    </div>
  );
};

export default Features;
