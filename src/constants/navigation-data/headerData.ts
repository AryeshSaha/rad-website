import {
  ROUTE_BUILDER,
  SOLUTION_ROUTES,
  USER_ROUTES,
} from "@/constants/navigation-data/URLs";
import { NavType } from "@/types/dataTypes";
import {
  Apple,
  Award,
  BarChart,
  Book,
  BookOpen,
  Briefcase,
  Building2,
  Code,
  Code2,
  CreditCard,
  DollarSign,
  Factory,
  Feather,
  FileCode,
  FileText,
  HardHat,
  Home,
  Infinity,
  Layout,
  Leaf,
  Mail,
  MapPin,
  Mic,
  Monitor,
  Palette,
  PenTool,
  Search,
  Server,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Tally5,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const headerData: NavType[] = [
  {
    key: "about",
    label: "About",
    href: USER_ROUTES.ABOUT,
  },
  {
    key: "solutions",
    label: "Solutions",
    items: [
      {
        key: "digital-marketing",
        name: "Digital Marketing",
        icon: TrendingUp,
        items: [
          {
            key: "seo",
            name: "Search Engine Optimization (SEO)",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "seo"
            ),
            icon: Search,
          },
          {
            key: "local-seo",
            name: "Local SEO Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "local-seo"
            ),
            icon: MapPin,
          },
          {
            key: "social-media",
            name: "Social Media Marketing",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "social-media"
            ),
            icon: Share2,
          },
          {
            key: "search-marketing",
            name: "Search Engine Marketing",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "search-marketing"
            ),
            icon: DollarSign,
          },
          {
            key: "voice-seo",
            name: "Voice Search Optimization Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "voice-seo"
            ),
            icon: Mic,
          },
          {
            key: "google-analytics",
            name: "Google Analytics Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "google-analytics"
            ),
            icon: BarChart,
          },
          {
            key: "online-reputation",
            name: "Online Reputation Management",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "online-reputation"
            ),
            icon: Award,
          },
          {
            key: "conversion-rate-optimization",
            name: "Conversion Rate Optimization Agency",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "conversion-rate-optimization"
            ),
            icon: Tally5,
          },
          {
            key: "email-marketing",
            name: "Email Marketing Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "email-marketing"
            ),
            icon: Mail,
          },
          {
            key: "technical-seo",
            name: "Technical SEO Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "technical-seo"
            ),
            icon: Settings,
          },
          {
            key: "content-writing",
            name: "Content Writing Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MARKETING,
              "content-writing"
            ),
            icon: FileText,
          },
        ],
      },
      {
        key: "web-design",
        name: "Web Design",
        icon: Layout,
        items: [
          {
            key: "responsive",
            name: "Responsive Website Design",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DESIGN,
              "responsive"
            ),
            icon: Monitor,
          },
          {
            key: "custom",
            name: "Custom Website Design",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DESIGN,
              "custom"
            ),
            icon: Palette,
          },
          {
            key: "ecommerce-design",
            name: "Ecommerce Website Design",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DESIGN,
              "ecommerce-design"
            ),
            icon: ShoppingCart,
          },
          {
            key: "small-business",
            name: "Small Business Website Design",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DESIGN,
              "small-business"
            ),
            icon: Building2,
          },
          {
            key: "ui-ux",
            name: "UI / UX Design",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DESIGN,
              "ui-ux"
            ),
            icon: PenTool,
          },
        ],
      },
      {
        key: "web-development",
        name: "Web Development",
        icon: Code,
        items: [
          {
            key: "node",
            name: "Node Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DEV,
              "node"
            ),
            icon: Leaf,
          },
          {
            key: "react",
            name: "React Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DEV,
              "react"
            ),
            icon: Feather,
          },
          {
            key: "jquery",
            name: "Jquery Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DEV,
              "jquery"
            ),
            icon: Code,
          },
          {
            key: "nextjs",
            name: "NextJs Development",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DEV,
              "nextjs"
            ),
            icon: Code2,
          },
          {
            key: "php",
            name: "Php Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.WEB_DEV,
              "php"
            ),
            icon: FileCode,
          },
        ],
      },
      {
        key: "cms-ecommerce",
        name: "CMS & Ecommerce",
        icon: Server,
        items: [
          {
            key: "cms-ecommerce-dev",
            name: "CMS Ecommerce Development",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.CMS_ECOM,
              "cms-ecommerce-dev"
            ),
            icon: Store,
          },
          {
            key: "drupal",
            name: "Drupal Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.CMS_ECOM,
              "drupal"
            ),
            icon: Zap,
          },
          {
            key: "magento",
            name: "Magento Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.CMS_ECOM,
              "magento"
            ),
            icon: ShoppingBag,
          },
          {
            key: "shopify",
            name: "Shopify Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.CMS_ECOM,
              "shopify"
            ),
            icon: CreditCard,
          },
          {
            key: "wordpress",
            name: "WordPress Development Services",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.CMS_ECOM,
              "wordpress"
            ),
            icon: BookOpen,
          },
        ],
      },
      {
        key: "mobile-app",
        name: "Mobile App Development",
        icon: Smartphone,
        items: [
          {
            key: "android",
            name: "Android App Development",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MOBILE,
              "android"
            ),
            icon: Zap,
          },
          {
            key: "ios",
            name: "Ios App Development",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MOBILE,
              "ios"
            ),
            icon: Apple,
          },
          {
            key: "hybrid",
            name: "Hybrid App Development",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.MOBILE,
              "hybrid"
            ),
            icon: Infinity,
          },
        ],
      },
      {
        key: "industries",
        name: "Industries We Service",
        icon: Factory,
        items: [
          {
            key: "retail",
            name: "Retail",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.INDUSTRIES,
              "retail"
            ),
            icon: ShoppingCart,
          },
          {
            key: "real-estate",
            name: "Real Estate",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.INDUSTRIES,
              "real-estate"
            ),
            icon: Home,
          },
          {
            key: "business-process",
            name: "Business Process",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.INDUSTRIES,
              "business-process"
            ),
            icon: Briefcase,
          },
          {
            key: "education",
            name: "Education",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.INDUSTRIES,
              "education"
            ),
            icon: Book,
          },
        ],
      },
      {
        key: "dedicated-hiring",
        name: "Dedicated Hiring",
        icon: Users,
        items: [
          {
            key: "hire-web-developer",
            name: "Hire Web Developer",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.HIRING,
              "hire-web-developer"
            ),
            icon: Code,
          },
          {
            key: "hire-apps-developer",
            name: "Hire Apps Developer",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.HIRING,
              "hire-apps-developer"
            ),
            icon: Smartphone,
          },
          {
            key: "hire-digital-expert",
            name: "Hire Digital Marketing Expert",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.HIRING,
              "hire-digital-expert"
            ),
            icon: TrendingUp,
          },
          {
            key: "hire-web-designers",
            name: "Hire Web Designers",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.HIRING,
              "hire-web-designers"
            ),
            icon: Layout,
          },
          {
            key: "hire-software-developer",
            name: "Hire Software Developer",
            href: ROUTE_BUILDER.USER(
              USER_ROUTES.SOLUTIONS,
              SOLUTION_ROUTES.HIRING,
              "hire-software-developer"
            ),
            icon: HardHat,
          },
        ],
      },
    ],
  },
  {
    key: "blogs",
    label: "Blogs",
    href: USER_ROUTES.BLOGS_PREVIEW,
  },
  {
    key: "testimonials",
    label: "Testimonials",
    href: USER_ROUTES.TESTIMONIALS,
  },
  {
    key: "faqs",
    label: "FAQs",
    href: USER_ROUTES.FAQS,
  },
] as const;
