"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HowItWorksCarousel = ({
  steps,
}: {
  steps: {
    number: string;
    title: string;
    description: string;
    image: string;
  }[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const onSelect = () => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);
  return (
    <>
      {/* Remove overflow-hidden from container and apply to carousel only */}
      <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {steps.map((step, index) => (
            <div key={index} className="flex-[0_0_85%] min-w-0 ml-4 first:ml-4">
              <div className="relative h-[320px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-xl blur-sm opacity-70"></div>
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 639px) 80vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <div className="p-3 flex-grow flex flex-col">
                    <h3 className="text-base font-bold mb-1">{step.title}</h3>
                    <p className="text-xs text-white/70">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators - Simplified */}
      <div className="flex justify-center mt-8 sm:hidden">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`h-1 rounded-full mx-1 ${
              selectedIndex === index
                ? "w-5 bg-gradient-to-r from-red-500 to-amber-500"
                : "w-2 bg-white/20"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default HowItWorksCarousel;
