import HowItWorksCarousel from "@/app/(sections)/how-it-works/_components/carousel";
import HowItWorksHeading from "@/app/(sections)/how-it-works/_components/heading";
import HowItWorksCard from "@/app/(sections)/how-it-works/_components/howItWorksCard";
import steps from "@/constants/dummy-data/how-it-works";

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <HowItWorksHeading />
        <div className="hidden sm:grid sm:grid-cols-2 sm:px-[5%] lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <HowItWorksCard
              key={index}
              step={step}
              index={index}
              length={steps.length}
            />
          ))}
        </div>
        <div className="sm:hidden">
          <HowItWorksCarousel steps={steps} />
        </div>
      </div>
    </section>
  );
}
