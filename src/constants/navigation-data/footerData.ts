import { USER_ROUTES } from "@/constants/navigation-data/URLs";

export const footerData: {
  key: string;
  label: string;
  items: { key: string; name: string; href: string }[];
}[] = [
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
        href: USER_ROUTES.ABOUT,
      },
      // {
      //   key: "blogs",
      //   name: "Blogs",
      //   href: USER_ROUTES.BLOGS,
      // },
      {
        key: "work",
        name: "Our Work",
        href: USER_ROUTES.PORTFOLIO,
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
