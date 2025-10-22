"use client";

import React from "react";
import GradientCard from "@/app/about/_components/gradientCard";
import { missionVisionData } from "@/constants/dummy-data/mission-vision";

const MissionVisionSection = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 items-stretch">
        {missionVisionData.map(({ key, icon, title, description }) => (
          <GradientCard
            key={key}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
