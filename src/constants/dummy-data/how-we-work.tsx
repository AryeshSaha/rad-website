import Image from "next/image";

export const howWeWorkData = [
  {
    title: "ROI-FOCUSED STRATEGIES",
    description:
      "Our marketing plans are designed to generate high-quality, convertible leads, ensuring your investment translates into tangible business results.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/hero.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AI-POWERED SOLUTIONS",
    description:
      "We go beyond traditional marketing approaches with AI-driven strategies that optimize campaigns, reduce costs, and deliver smarter, faster results.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/hero.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CUSTOMIZED FOR YOU",
    description:
      "As a full-service digital agency, our solutions are fully tailored to your business goals, industry, and target audience—so you get the most relevant and effective strategies.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/hero.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
