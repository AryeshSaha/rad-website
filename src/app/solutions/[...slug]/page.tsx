import PageTopper from "@/components/pageTopper";
import { ComponentMap } from "@/lib/component-map";
import { getSolutionData } from "@/lib/data-loader";
import { SectionData } from "@/types/solutionSectionTypes";
import { notFound } from "next/navigation";
import React from "react";

const Solution = async (props: { params: Promise<{ slug: string[] }> }) => {
  const slugs = await props.params;
  const parent = slugs.slug[0];
  const solution = slugs.slug[slugs.slug.length - 1];

  const sectionData: SectionData[] | null = await getSolutionData(
    parent,
    solution
  );

  if (!sectionData || !solution) notFound();

  return (
    <div className="pt-16 sm:pt-20">
      <PageTopper title={solution} />
      <main>
        {sectionData.map((section: SectionData, index: number) => {
          const Component = ComponentMap[section.type];

          if (!Component) return null;

          const backgroundColorClass =
            index % 2 === 0 ? "bg-black" : "bg-zinc-950";

          return (
            <section key={index} className={`${backgroundColorClass}`}>
              <Component {...section.data} />
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Solution;
