const joinPaths = (...parts: string[]) =>
  parts
    .map((p) => p.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/")
    .replace(/^/, "/");

export const ROUTE_BUILDER = {
  ADMIN: (...segments: string[]) =>
    joinPaths(TOP_LEVEL_ROUTES.ADMIN, ...segments),
  USER: (...segments: string[]) =>
    joinPaths(TOP_LEVEL_ROUTES.HOME, ...segments),
};

export const TOP_LEVEL_ROUTES = {
  ADMIN: "/admin",
  ADMIN_LOGIN: "/admin/login",
  HOME: "/",
} as const;

export const USER_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  BLOGS_PREVIEW: "/#blogs",
  BLOGS: "/blogs",
  PORTFOLIO: "/portfolio",
  CONTACT: "/contact",
  FAQS: "/#faqs",
  TESTIMONIALS: "/#testimonials",
  SOLUTIONS: "/solutions",
} as const;

export const SOLUTION_ROUTES = {
  MARKETING: "/marketing",
  WEB_DESIGN: "/graphic-design",
  WEB_DEV: "/dev",
  CMS_ECOM: "/cms-ecom",
  MOBILE: "/mobile-app",
  HIRING: "/dedicated-hiring",
  INDUSTRIES: "/industries",
} as const;
