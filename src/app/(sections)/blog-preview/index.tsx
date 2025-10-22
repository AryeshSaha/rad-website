import articles from "@/constants/dummy-data/blogs";
import BlogPreviewCard from "@/app/(sections)/blog-preview/_components/blogPreviewCard";
import BlogHeader from "@/app/(sections)/blog-preview/_components/blogHeader";

export default function BlogPreview() {
  return (
    <section
      id="blogs"
      className="py-5 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <BlogHeader />

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <BlogPreviewCard key={index} index={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
