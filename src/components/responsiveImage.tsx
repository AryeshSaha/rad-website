"use client";

import Image from "next/image";
import { aspectRatioToPadding, cn } from "@/lib/utils";
import { ResponsiveImageProps } from "@/types/propTypes";


export default function ResponsiveImage({
  src,
  alt,
  aspectRatio = "100%",
  className,
  containerClassName,
  overlayClassName,
  ...props
}: ResponsiveImageProps) {
  const paddingBottom = aspectRatioToPadding(aspectRatio);
  return (
    <div className={cn("relative w-full", containerClassName)}>
      <div
        className="relative w-full group overflow-hidden rounded-2xl"
        style={{ paddingBottom }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-transform duration-500 ease-in-out group-hover:scale-110",
            className
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
        {overlayClassName && (
          <div
            className={cn(
              "absolute inset-0 pointer-events-none z-10",
              overlayClassName
            )}
          />
        )}
      </div>
    </div>
  );
}
