import { cn } from "@/lib/utils";
import React from "react";

const BgClipText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl font-semibold capitalize tracking-wide text-center bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default BgClipText;
