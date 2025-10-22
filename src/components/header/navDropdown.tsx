"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavDropdownProps } from "@/types/propTypes";

export default function NavDropdown({
  label,
  items,
  id,
  isMobile = false,
  className,
  activeDropdown,
  setActiveDropdown,
}: NavDropdownProps) {
  const isOpen = activeDropdown === id;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setActiveDropdown]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === "Escape" && isOpen) {
      setActiveDropdown(null);
    }
  };

  const handleMouseEnter = () => {
    if (isMobile) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (activeDropdown === id) {
        setActiveDropdown(null);
      }
    }, 150);
  };

  const toggleDropdown = () => {
    setActiveDropdown(isOpen ? null : id);
  };

  const mobileStyles = isMobile
    ? {
        wrapper: "border-b border-white/10 pb-2",
        button:
          "flex items-center justify-between w-full py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 rounded-md px-2",
        content: "pl-2 mt-1 space-y-0.5 animate-fadeIn",
        item: "block py-1.5 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors active:bg-white/15",
      }
    : {
        wrapper: "relative",
        button:
          "flex items-center gap-1 text-white/80 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base",
        content:
          "absolute top-full left-0 mt-1 w-64 bg-black/90 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-xl p-3 animate-fadeIn z-10",
        item: "flex items-center px-4 py-2.5 hover:bg-white/10 rounded-lg transition-colors",
      };
  const firstItem = items[0];
  return (
    <div
      className={cn(mobileStyles.wrapper, className)}
      onMouseEnter={isMobile ? undefined : handleMouseEnter}
      onMouseLeave={isMobile ? undefined : handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className={mobileStyles.button}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={isMobile ? "font-medium" : ""}>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
            isMobile ? "" : "ml-1"
          )}
        />
      </button>

      {isOpen && isMobile && (
        <div className="pl-2 mt-2 space-y-4 animate-in fade-in duration-200">
          {items.map((column) => (
            <div key={column.key}>
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
                {column.icon && <column.icon className="h-4 w-4" />}
                <span>{column.name}</span>
              </div>
              <div className="space-y-1">
                {column.items.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="flex items-center gap-2 py-1.5 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    {item.icon && (
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                    )}
                    <span className="text-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {isOpen && !isMobile && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
      bg-popover border border-border rounded-xl shadow-elegant 
      backdrop-blur-xl animate-in fade-in slide-in-from-top-2 
      duration-200 z-50 w-[80vw] max-w-6xl p-4"
        >
          <div className="flex gap-2 w-full">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm uppercase tracking-wide pb-2 border-b border-border/50">
                {firstItem.icon && <firstItem.icon className="h-5 w-5" />}
                <span>{firstItem.name}</span>
              </div>
              <div className="space-y-1">
                {firstItem.items.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 group"
                  >
                    {item.icon && (
                      <item.icon className="h-4 w-4 flex-shrink-0 text-muted-foreground/60 group-hover:text-red-400 transition-colors" />
                    )}
                    <span className="text-sm group-hover:text-red-400 transition-colors">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex-[2] flex flex-wrap gap-4">
              {items.slice(1).map((column) => (
                <div
                  key={column.key}
                  className="min-w-[12rem] flex-1 space-y-3"
                >
                  <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm uppercase tracking-wide pb-2 border-b border-border/50">
                    {column.icon && <column.icon className="h-5 w-5" />}
                    <span>{column.name}</span>
                  </div>
                  <div className="space-y-1">
                    {column.items.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 group"
                      >
                        {item.icon && (
                          <item.icon className="h-4 w-4 flex-shrink-0 text-muted-foreground/60 group-hover:text-red-400 transition-colors" />
                        )}
                        <span className="text-sm group-hover:text-red-400 transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
