import { Zap, Users, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    description:
      "Gain deep insights with our powerful analytics tools. Track performance, identify trends, and make data-driven decisions.",
    benefits: [
      "Real-time data visualization",
      "Custom reporting dashboards",
      "Predictive analytics with AI",
      "Automated insights generation",
    ],
    image: "/images/hero.avif",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation",
    description:
      "Streamline your workflows with smart automation. Reduce manual tasks and focus on what matters most.",
    benefits: [
      "Workflow automation builder",
      "Trigger-based actions",
      "Integration with 100+ tools",
      "AI-powered suggestions",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team in real-time. Share, edit, and collaborate on projects from anywhere.",
    benefits: [
      "Real-time document editing",
      "Project management tools",
      "Team chat and video calls",
      "Permission controls",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security",
    description:
      "Protect your data with enterprise-grade security. Ensure compliance and maintain privacy.",
    benefits: [
      "End-to-end encryption",
      "Role-based access control",
      "Compliance monitoring",
      "Audit logs and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
];

export default features;
