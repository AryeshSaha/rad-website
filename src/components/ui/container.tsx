import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("container mx-auto px-4 py-16", className)}>
      {children}
    </section>
  );
};

export default Container;
