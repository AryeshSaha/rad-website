import AboutLeftContent from "@/app/about/_components/aboutLeftContent";
import AboutRightImage from "@/app/about/_components/aboutRightImage";
import { FounderSection } from "@/app/about/_sections/founder";
import HowWeWork from "@/app/about/_sections/howWeWork";
import MissionVisionSection from "@/app/about/_sections/missionVision";
import { TeamSection } from "@/app/about/_sections/team";
import LazyLoad from "@/components/lazyLoadWrapper";
import PageTopper from "@/components/pageTopper";
import Container from "@/components/ui/container";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 sm:pt-20">
      <PageTopper title="About Us" />
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 sm:py-0">
          <AboutLeftContent />
          <AboutRightImage />
        </div>
      </Container>
      <LazyLoad>
        <MissionVisionSection />
      </LazyLoad>
      <LazyLoad>
        <HowWeWork />
      </LazyLoad>
      <LazyLoad>
        <FounderSection />
      </LazyLoad>
      <LazyLoad>
        <TeamSection />
      </LazyLoad>
    </div>
  );
};

export default About;
