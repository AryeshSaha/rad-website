import { USER_ROUTES } from "@/constants/navigation-data/URLs";
import { NavType } from "@/types/dataTypes";

export const footerData: NavType[] = [
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
    key: "company",
    label: "Company",
    items: [
      {
        key: "about",
        name: "About",
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
      {
        key: "contact",
        name: "Contact",
        href: USER_ROUTES.CONTACT,
      },
    ],
  },
  {
    key: "contact",
    label: "Get in Touch",
    items: [
      {
        key: "address",
        name: "123 Main Street, City, State, ZIP",
        href: "/",
      },
      {
        key: "phone",
        name: "123-456-7890",
        href: "tel:123-456-7890",
      },
      {
        key: "mail",
        name: "4H2Y7@example.com",
        href: "mailto:4H2Y7@example.com",
      },
    ],
  },
] as const;
