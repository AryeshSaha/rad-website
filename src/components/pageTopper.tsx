"use client";

import { usePathname } from "next/navigation";

/**
 * Reusable full-width banner with a red→amber gradient background
 * Displays a heading based on the page or provided title
 */
export default function PageTopper({ title }: { title?: string }) {
  const pathname = usePathname();

  const formattedTitle =
    title ||
    pathname
      .split("/")
      .filter(Boolean)
      .slice(-1)[0]
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()) ||
    "Home";

  return (
    <section className="w-full bg-gradient-to-r from-red-500/80 to-amber-500/80 text-white py-20 flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-semibold capitalize tracking-wide text-center">
        {formattedTitle}
      </h1>
    </section>
  );
}
