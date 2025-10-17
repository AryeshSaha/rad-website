"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavDropdown from "@/components/header/navDropdown";
import { headerData } from "@/constants/navigation-data";
import { USER_ROUTES } from "@/constants/navigation-data/URLs";

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleActiveDropdown = (id: string | null) => {
    setActiveDropdown(id);
  };

  return (
    <>
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {headerData.map((item) => {
          const isDropDown = !!item.items?.length;

          return isDropDown ? (
            <NavDropdown
              key={item.key}
              id={item.key}
              label={item.label}
              items={item.items || []}
              activeDropdown={activeDropdown}
              setActiveDropdown={handleActiveDropdown}
            />
          ) : (
            item.href && (
              <Link
                key={item.key}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
                onMouseEnter={() => setActiveDropdown(null)}
              >
                {item.label}
              </Link>
            )
          );
        })}
      </nav>

      <div
        className="hidden md:flex items-center gap-2 lg:gap-4"
        onMouseEnter={() => setActiveDropdown(null)}
      >
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base hidden"
        >
          Log in
        </Button>
        <Link href={USER_ROUTES.CONTACT}>
          <Button
            variant="myTheme"
            className="shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-shadow text-sm lg:text-base px-3 lg:px-4"
          >
            Get Quote
          </Button>
        </Link>
      </div>
    </>
  );
}
