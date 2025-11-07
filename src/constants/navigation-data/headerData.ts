import {
  CMS_ECOM_SOLUTIONS,
  HIRING_SOLUTIONS,
  INDUSTRIES_SOLUTIONS,
  MARKETING_SOLUTIONS,
  MOBILE_SOLUTIONS,
  SOLUTION_ROUTE_BUILDER,
  SOLUTION_ROUTES,
  USER_ROUTES,
  WEB_DESIGN_SOLUTIONS,
  WEB_DEV_SOLUTIONS,
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
            key: MARKETING_SOLUTIONS.SEO,
            name: "Search Engine Optimization (SEO)",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.SEO
            ),
            icon: Search,
          },
          {
            key: MARKETING_SOLUTIONS.LOCAL_SEO,
            name: "Local SEO Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.LOCAL_SEO
            ),
            icon: MapPin,
          },
          {
            key: MARKETING_SOLUTIONS.SOCIAL_MEDIA,
            name: "Social Media Marketing",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.SOCIAL_MEDIA
            ),
            icon: Share2,
          },
          {
            key: MARKETING_SOLUTIONS.SEARCH_MARKETING,
            name: "Search Engine Marketing",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.SEARCH_MARKETING
            ),
            icon: DollarSign,
          },
          {
            key: MARKETING_SOLUTIONS.VOICE_SEO,
            name: "Voice Search Optimization Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.VOICE_SEO
            ),
            icon: Mic,
          },
          {
            key: MARKETING_SOLUTIONS.GOOGLE_ANALYTICS,
            name: "Google Analytics Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.GOOGLE_ANALYTICS
            ),
            icon: BarChart,
          },
          {
            key: MARKETING_SOLUTIONS.ONLINE_REPUTATION,
            name: "Online Reputation Management",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.ONLINE_REPUTATION
            ),
            icon: Award,
          },
          {
            key: MARKETING_SOLUTIONS.CONVERSION_RATE_OPTIMIZATION,
            name: "Conversion Rate Optimization Agency",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.CONVERSION_RATE_OPTIMIZATION
            ),
            icon: Tally5,
          },
          {
            key: MARKETING_SOLUTIONS.EMAIL_MARKETING,
            name: "Email Marketing Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.EMAIL_MARKETING
            ),
            icon: Mail,
          },
          {
            key: MARKETING_SOLUTIONS.TECHNICAL_SEO,
            name: "Technical SEO Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.TECHNICAL_SEO
            ),
            icon: Settings,
          },
          {
            key: MARKETING_SOLUTIONS.CONTENT_WRITING,
            name: "Content Writing Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MARKETING,
              MARKETING_SOLUTIONS.CONTENT_WRITING
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
            key: WEB_DESIGN_SOLUTIONS.RESPONSIVE_DESIGN,
            name: "Responsive Website Design",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DESIGN,
              WEB_DESIGN_SOLUTIONS.RESPONSIVE_DESIGN
            ),
            icon: Monitor,
          },
          {
            key: WEB_DESIGN_SOLUTIONS.CUSTOM_WEBSITE_DESIGN,
            name: "Custom Website Design",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DESIGN,
              WEB_DESIGN_SOLUTIONS.CUSTOM_WEBSITE_DESIGN
            ),
            icon: Palette,
          },
          {
            key: WEB_DESIGN_SOLUTIONS.ECOMMERCE_DESIGN,
            name: "Ecommerce Website Design",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DESIGN,
              WEB_DESIGN_SOLUTIONS.ECOMMERCE_DESIGN
            ),
            icon: ShoppingCart,
          },
          {
            key: WEB_DESIGN_SOLUTIONS.SMALL_BUSINESS_DESIGN,
            name: "Small Business Website Design",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DESIGN,
              WEB_DESIGN_SOLUTIONS.SMALL_BUSINESS_DESIGN
            ),
            icon: Building2,
          },
          {
            key: WEB_DESIGN_SOLUTIONS.UI_UX_DESIGN,
            name: "UI / UX Design",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DESIGN,
              WEB_DESIGN_SOLUTIONS.UI_UX_DESIGN
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
            key: WEB_DEV_SOLUTIONS.NODEJS_DEVELOPMENT,
            name: "Node Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DEV,
              WEB_DEV_SOLUTIONS.NODEJS_DEVELOPMENT
            ),
            icon: Leaf,
          },
          {
            key: WEB_DEV_SOLUTIONS.REACTJS_DEVELOPMENT,
            name: "React Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DEV,
              WEB_DEV_SOLUTIONS.REACTJS_DEVELOPMENT
            ),
            icon: Feather,
          },
          {
            key: WEB_DEV_SOLUTIONS.JQUERY_DEVELOPMENT,
            name: "Jquery Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DEV,
              WEB_DEV_SOLUTIONS.JQUERY_DEVELOPMENT
            ),
            icon: Code,
          },
          {
            key: WEB_DEV_SOLUTIONS.NEXTJS_DEVELOPMENT,
            name: "NextJs Development",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DEV,
              WEB_DEV_SOLUTIONS.NEXTJS_DEVELOPMENT
            ),
            icon: Code2,
          },
          {
            key: WEB_DEV_SOLUTIONS.PHP_DEVELOPMENT,
            name: "Php Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.WEB_DEV,
              WEB_DEV_SOLUTIONS.PHP_DEVELOPMENT
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
            key: CMS_ECOM_SOLUTIONS.CMS_ECOM_DEVELOPMENT,
            name: "CMS Ecommerce Development",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.CMS_ECOM,
              CMS_ECOM_SOLUTIONS.CMS_ECOM_DEVELOPMENT
            ),
            icon: Store,
          },
          {
            key: CMS_ECOM_SOLUTIONS.DRUPAL_DEVELOPMENT,
            name: "Drupal Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.CMS_ECOM,
              CMS_ECOM_SOLUTIONS.DRUPAL_DEVELOPMENT
            ),
            icon: Zap,
          },
          {
            key: CMS_ECOM_SOLUTIONS.MAGENTO_DEVELOPMENT,
            name: "Magento Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.CMS_ECOM,
              CMS_ECOM_SOLUTIONS.MAGENTO_DEVELOPMENT
            ),
            icon: ShoppingBag,
          },
          {
            key: CMS_ECOM_SOLUTIONS.SHOPIFY_DEVELOPMENT,
            name: "Shopify Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.CMS_ECOM,
              CMS_ECOM_SOLUTIONS.SHOPIFY_DEVELOPMENT
            ),
            icon: CreditCard,
          },
          {
            key: CMS_ECOM_SOLUTIONS.WORDPRESS_DEVELOPMENT,
            name: "WordPress Development Services",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.CMS_ECOM,
              CMS_ECOM_SOLUTIONS.WORDPRESS_DEVELOPMENT
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
            key: MOBILE_SOLUTIONS.ANDROID_APP_DEVELOPMENT,
            name: "Android App Development",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MOBILE,
              MOBILE_SOLUTIONS.ANDROID_APP_DEVELOPMENT
            ),
            icon: Zap,
          },
          {
            key: MOBILE_SOLUTIONS.IOS_APP_DEVELOPMENT,
            name: "iOS App Development",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MOBILE,
              MOBILE_SOLUTIONS.IOS_APP_DEVELOPMENT
            ),
            icon: Apple,
          },
          {
            key: MOBILE_SOLUTIONS.HYBRID_APP_DEVELOPMENT,
            name: "Hybrid App Development",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.MOBILE,
              MOBILE_SOLUTIONS.HYBRID_APP_DEVELOPMENT
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
            key: INDUSTRIES_SOLUTIONS.RETAIL,
            name: "Retail",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.INDUSTRIES,
              INDUSTRIES_SOLUTIONS.RETAIL
            ),
            icon: ShoppingCart,
          },
          {
            key: INDUSTRIES_SOLUTIONS.REAL_ESTATE,
            name: "Real Estate",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.INDUSTRIES,
              INDUSTRIES_SOLUTIONS.REAL_ESTATE
            ),
            icon: Home,
          },
          {
            key: INDUSTRIES_SOLUTIONS.BUSINESS_PROCESS,
            name: "Business Process",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.INDUSTRIES,
              INDUSTRIES_SOLUTIONS.BUSINESS_PROCESS
            ),
            icon: Briefcase,
          },
          {
            key: INDUSTRIES_SOLUTIONS.EDUCATION,
            name: "Education",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.INDUSTRIES,
              INDUSTRIES_SOLUTIONS.EDUCATION
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
            key: HIRING_SOLUTIONS.HIRE_WEB_DEVELOPERS,
            name: "Hire Web Developer",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.HIRING,
              HIRING_SOLUTIONS.HIRE_WEB_DEVELOPERS
            ),
            icon: Code,
          },
          {
            key: HIRING_SOLUTIONS.HIRE_MOBILE_DEVELOPERS,
            name: "Hire Apps Developer",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.HIRING,
              HIRING_SOLUTIONS.HIRE_MOBILE_DEVELOPERS
            ),
            icon: Smartphone,
          },
          {
            key: HIRING_SOLUTIONS.HIRE_DIGITAL_MARKETING_EXPERT,
            name: "Hire Digital Marketing Expert",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.HIRING,
              HIRING_SOLUTIONS.HIRE_DIGITAL_MARKETING_EXPERT
            ),
            icon: TrendingUp,
          },
          {
            key: HIRING_SOLUTIONS.HIRE_WEB_DESIGN,
            name: "Hire Web Designers",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.HIRING,
              HIRING_SOLUTIONS.HIRE_WEB_DESIGN
            ),
            icon: Layout,
          },
          {
            key: HIRING_SOLUTIONS.HIRE_SOFTWARE_DEVELOPERS,
            name: "Hire Software Developer",
            href: SOLUTION_ROUTE_BUILDER(
              SOLUTION_ROUTES.HIRING,
              HIRING_SOLUTIONS.HIRE_SOFTWARE_DEVELOPERS
            ),
            icon: HardHat,
          },
        ],
      },
    ],
  },
  // {
  //   key: "blogs",
  //   label: "Blogs",
  //   href: USER_ROUTES.BLOGS_PREVIEW,
  // },
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
