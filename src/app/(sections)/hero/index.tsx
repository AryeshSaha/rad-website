import BgOrb from "@/app/(sections)/hero/_components/bgOrb";
import LeftContent from "@/app/(sections)/hero/_components/leftContent";
import RightImage from "@/app/(sections)/hero/_components/rightImage";
import Container from "@/components/ui/container";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 sm:pt-20 overflow-hidden bg-black">
      {/* Background elements */}
      <BgOrb />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 sm:py-0">
          <LeftContent />
          <RightImage />
        </div>
      </Container>
    </section>
  );
}
