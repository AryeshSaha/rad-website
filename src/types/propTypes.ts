import { LucideIcon } from "lucide-react";
import { Variants } from "motion";
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