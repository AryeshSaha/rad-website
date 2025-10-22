import Image from "next/image";

export const FounderSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            About the Founder
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-foreground">
            Rishabh Mukherjee: The Visionary Mind Behind RAD Media Solutions
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-elegant">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Rishabh Mukherjee - Founder of RAD Media Solutions"
                className="w-full h-full object-cover"
                width={500}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At the heart of RAD Media Solutions is Rishabh Mukherjee, a
              passionate entrepreneur dedicated to helping startups, coaches,
              and businesses scale through impactful digital strategies. With a
              strong foundation in design, web development, and marketing,
              Rishabh brings together creativity and strategy to build
              high-converting brands and result-oriented digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As the Founder of RAD Media Solutions, Rishabh has been
              instrumental in shaping the agency&apos;s core values —
              innovation, transparency, and measurable growth. His expertise
              spans across WordPress, Shopify, video production, and digital
              branding, enabling businesses to build a strong online identity
              and convert their audience effectively.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of hands-on experience and a deep understanding of the
              digital landscape, Rishabh continues to lead RAD Media Solutions
              toward becoming a trusted partner for businesses seeking smart,
              AI-driven, and data-backed digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
