import Cta from "@/app/_sections/cta";
import Faqs from "@/app/_sections/faqs";
import Features from "@/app/_sections/features";
import Hero from "@/app/_sections/hero";
import HowItWorks from "@/app/_sections/how-it-works";
import SocialProof from "@/app/_sections/social-proof";
import Testimonials from "@/app/_sections/testimonials";
import LazyLoad from "@/components/lazyLoadWrapper";
import ScrollRestoration from "@/components/scrollRestoration";
import ScrollToHash from "@/components/scrollToHash";

export default function Home() {
  return (
    <div className="min-h-screen bg-black px-0 sm:px-4 text-white">
      <ScrollRestoration />
      <ScrollToHash />
      <Hero />
      <LazyLoad>
        <SocialProof />
      </LazyLoad>
      <LazyLoad>
        <HowItWorks />
      </LazyLoad>
      <LazyLoad>
        <Features />
      </LazyLoad>
      <LazyLoad>
        <Testimonials />
      </LazyLoad>
      <LazyLoad>
        <Faqs />
      </LazyLoad>
      <LazyLoad>
        <Cta />
      </LazyLoad>
    </div>
  );
}
