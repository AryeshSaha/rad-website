import { LucideIcon } from "lucide-react";

export type NavType = {
  key: string;
  label: string;
  href?: string;
  items?: {
    key: string;
    name: string;
    icon: LucideIcon;
    items: { key: string; name: string; href: string; icon: LucideIcon }[];
  }[];
};

export type BlogType = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
};

export type SocialLink = {
  platform: "github" | "linkedin" | "twitter" | "portfolio" | "email";
  url: string;
};

export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  image: string;
  socials: SocialLink[];
};

export type TeamMemberProps = TeamMember;
