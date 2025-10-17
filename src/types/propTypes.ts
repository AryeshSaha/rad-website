import { Variants } from "motion";

export type NavDropdownProps = {
  label: string;
  items: { key: string; name: string; href: string }[];
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
