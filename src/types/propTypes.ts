import { LucideIcon } from "lucide-react";
import { Variants } from "motion";
import { ImageProps, StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NavDropdownProps = {
  label: string;
  items: {
    key: string;
    name: string;
    icon: LucideIcon;
    items: { key: string; name: string; href: string; icon: LucideIcon }[];
  }[];
  id: string;
  isMobile?: boolean;
  className?: string;
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
};

export type socialProofProps = {
  containerVariants: Variants;
  itemVariants: Variants;
};

export type GradientCardProps = {
  icon: LucideIcon;
  title: string;
  description: string | ReactNode;
  className?: string;
};

export type ImageTextSectionProps = {
  image: string | StaticImageData;
  alt: string;
  heading: string | ReactNode;
  body: string | ReactNode;
  imagePosition?: "left" | "right";
  aspectRatio?: string;
  className?: string;
  imageContainerClassName?: string;
  textContainerClassName?: string;
};

export type ResponsiveImageProps = Omit<ImageProps, "width" | "height"> & {
  aspectRatio?: string; // e.g., 1:1, 16:9, 4:3, etc. and for portrait: 9:16, 3:4, etc.
  className?: string;
  containerClassName?: string;
  overlayClassName?: string;
};
