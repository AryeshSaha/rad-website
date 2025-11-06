
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function aspectRatioToPadding(ratio: string): string {
  const [w, h] = ratio.split(":").map(Number);
  if (!w || !h) return "100%";
  return `${(h / w) * 100}%`;
}