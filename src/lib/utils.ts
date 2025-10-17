
import { TOP_LEVEL_ROUTES } from "@/constants/navigation-data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const joinPaths = (...parts: string[]) =>
  parts
    .map((p) => p.replace(/^\/+|\/+$/g, "")) // remove extra slashes
    .filter(Boolean)
    .join("/")
    .replace(/^/, "/");

export const ROUTE_BUILDER = {
  ADMIN: (...segments: string[]) =>
    joinPaths(TOP_LEVEL_ROUTES.ADMIN, ...segments),
  USER: (...segments: string[]) =>
    joinPaths(TOP_LEVEL_ROUTES.HOME, ...segments),
};
