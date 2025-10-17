"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for app router

const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const timer = setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToHash;
