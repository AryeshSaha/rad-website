"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavDropdown from "@/components/header/navDropdown";
import { headerData } from "@/constants/navigation-data";
import { USER_ROUTES } from "@/constants/navigation-data/URLs";

export default function MobileNav({ isOpen }: { isOpen: boolean }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 overflow-hidden",
        isOpen
          ? "h-[calc(100vh-60px)] opacity-100 overflow-y-auto"
          : "h-0 opacity-0 overflow-hidden"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-3 py-4 flex flex-col gap-2 transition-all duration-300 overflow-y-auto",
          isOpen ? "translate-y-0" : "-translate-y-4"
        )}
      >
        {headerData.map((item) => {
          const isDropDown = !!item.items?.length;
          return isDropDown ? (
            <NavDropdown
              key={item.key}
              id={item.key}
              label={item.label}
              items={item.items || []}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              isMobile
            />
          ) : (
            item.href && (
              <Link
                key={item.key}
                href={item.href}
                className="py-2 px-2 border-b border-white/10 hover:bg-white/5 rounded-md transition-colors active:bg-white/10"
              >
                {item.label}
              </Link>
            )
          );
        })}

        <div className="flex flex-col gap-2 pt-3">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 h-10 active:bg-white/20 hidden"
          >
            Log in
          </Button>
          <Link href={USER_ROUTES.CONTACT}>
            <Button
              variant="myTheme"
              className="shadow-lg shadow-amber-500/20 active:opacity-90 w-full"
            >
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
