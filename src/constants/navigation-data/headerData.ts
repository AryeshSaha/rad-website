import { NavType } from "@/types/dataTypes";

export const headerData: NavType[] = [
  {
    key: "home",
    label: "Home",
    href: "/",
  },
  {
    key: "about",
    label: "About",
    items: [
      {
        key: "mission",
        name: "Our Mission",
        href: "/",
      },
      {
        key: "team",
        name: "Our Team",
        href: "/",
      },
      {
        key: "work",
        name: "Our Work",
        href: "/",
      },
    ],
  },
  {
    key: "solutions",
    label: "Solutions",
    items: [
      {
        key: "maintenance",
        name: "Maintenance",
        href: "/",
      },
      {
        key: "dev",
        name: "Development",
        href: "/",
      },
      {
        key: "graphic-design",
        name: "Graphic Design",
        href: "/",
      },
      {
        key: "seo",
        name: "SEO",
        href: "/",
      },
    ],
  },
  {
    key: "testimonials",
    label: "Testimonials",
    href: "/#testimonials",
  },
] as const;
