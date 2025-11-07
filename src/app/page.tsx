// import BlogPreview from "@/app/(sections)/blog-preview";
import Cta from "@/app/(sections)/cta";
import Faqs from "@/app/(sections)/faqs";
import Features from "@/app/(sections)/features";
import Hero from "@/app/(sections)/hero";
import HowItWorks from "@/app/(sections)/how-it-works";
import SocialProof from "@/app/(sections)/social-proof";
import Testimonials from "@/app/(sections)/testimonials";
import LazyLoad from "@/components/lazyLoadWrapper";
import ScrollRestoration from "@/components/scrollRestoration";

export default function Home() {
  return (
    <div className="min-h-screen bg-black px-0 sm:px-4 text-white">
      <ScrollRestoration />
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
        <Cta />
      </LazyLoad>
      <LazyLoad>
        <Testimonials />
      </LazyLoad>
      {/* <LazyLoad>
        <BlogPreview />
      </LazyLoad> */}
      <LazyLoad>
        <Faqs />
      </LazyLoad>
    </div>
  );
}
