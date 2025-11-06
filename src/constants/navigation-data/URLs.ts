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

export const SOLUTION_ROUTE_BUILDER = (
  category: string,
  solution: string,
) => joinPaths(USER_ROUTES.SOLUTIONS, category, solution);

export const SOLUTION_ROUTES = {
  MARKETING: "marketing",
  WEB_DESIGN: "graphic-design",
  WEB_DEV: "dev",
  CMS_ECOM: "cms-ecom",
  MOBILE: "mobile-app",
  HIRING: "dedicated-hiring",
  INDUSTRIES: "industries",
} as const;

export const MARKETING_SOLUTIONS = {
  SEO: "seo",
  LOCAL_SEO: "local-seo-services",
  SOCIAL_MEDIA: "social-media-marketing",
  SEARCH_MARKETING: "search-marketing",
  VOICE_SEO: "voice-seo",
  GOOGLE_ANALYTICS: "google-analytics-services",
  ONLINE_REPUTATION: "online-reputation-management",
  CONVERSION_RATE_OPTIMIZATION: "conversion-rate-optimization",
  EMAIL_MARKETING: "email-marketing",
  TECHNICAL_SEO: "technical-seo",
  CONTENT_WRITING: "content-writing",
} as const

export const WEB_DESIGN_SOLUTIONS = {
  RESPONSIVE_DESIGN: "responsive-web-design",
  CUSTOM_WEBSITE_DESIGN: "custom-website-design",
  ECOMMERCE_DESIGN: "ecommerce-website-design",
  SMALL_BUSINESS_DESIGN: "small-business-web-design",
  UI_UX_DESIGN: "ui-ux-design",
} as const

export const WEB_DEV_SOLUTIONS = {
  NODEJS_DEVELOPMENT: "nodejs-development",
  REACTJS_DEVELOPMENT: "reactjs-development",
  NEXTJS_DEVELOPMENT: "nextjs-development",
  JQUERY_DEVELOPMENT: "jquery-development",
  PHP_DEVELOPMENT: "php-development",
} as const

export const CMS_ECOM_SOLUTIONS = {
CMS_ECOM_DEVELOPMENT: "cms-ecommerce-development",
DRUPAL_DEVELOPMENT: "drupal-development",
MAGENTO_DEVELOPMENT: "magento-development",
SHOPIFY_DEVELOPMENT: "shopify-development",
WORDPRESS_DEVELOPMENT: "wordpress-development",
} as const

export const MOBILE_SOLUTIONS = {
  ANDROID_APP_DEVELOPMENT: "android-app-development",
  IOS_APP_DEVELOPMENT: "ios-app-development",
  HYBRID_APP_DEVELOPMENT: "hybrid-app-development",
} as const

export const INDUSTRIES_SOLUTIONS = {
  RETAIL: "retail",
  REAL_ESTATE: "real-estate",
  BUSINESS_PROCESS: "business-process",
  EDUCATION: "education",
} as const

export const HIRING_SOLUTIONS = {
  HIRE_WEB_DESIGN: "hire-web-designers",
  HIRE_MOBILE_DEVELOPERS: "hire-mobile-developers",
  HIRE_DIGITAL_MARKETING_EXPERT: "hire-digital-marketing-experts",
  HIRE_WEB_DEVELOPERS: "hire-web-developers",
  HIRE_SOFTWARE_DEVELOPERS: "hire-software-developers",
} as const