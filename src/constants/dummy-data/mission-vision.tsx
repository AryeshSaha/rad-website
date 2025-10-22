import { Eye, Rocket } from "lucide-react";

export const missionVisionData = [
  {
    key: "our-mission",
    icon: Rocket,
    title: "OUR MISSION",
    description: (
      <div className="space-y-3">
        <p>
          At <strong className="font-bold">RAD Media Solutions</strong>, our
          mission is to help businesses achieve measurable success through
          smart, data-driven digital solutions. We blend creativity, technology,
          and AI innovation to enhance brand visibility, boost online
          performance, and build stronger connections with audiences.
        </p>
        <h6 className="font-semibold">We aim to:</h6>
        <ul className="text-zinc-200 list-disc list-inside space-y-2">
          <li>
            Deliver powerful, customized digital strategies aligned with every
            client&apos;s vision.
          </li>
          <li>
            Enhance brand recognition through performance-focused marketing.
          </li>
          <li>
            Build lasting partnerships based on trust, transparency, and
            consistent results.
          </li>
          <li>
            Empower businesses to scale efficiently with AI-driven tools and
            digital innovation.
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "our-vision",
    icon: Eye,
    title: "OUR VISION",
    description: (
      <div className="space-y-3">
        <p>
          At <strong className="font-bold">RAD Media Solutions</strong>, our
          vision is to become a globally recognized digital agency known for
          driving business growth through intelligent strategies, creative
          excellence, and advanced technology. We strive to redefine the digital
          landscape by delivering innovative, impactful, and measurable results
          for every client.
        </p>
        <h6 className="font-semibold">We aim to:</h6>
        <ul className="text-zinc-200 list-disc list-inside space-y-2">
          <li>
            Lead the future of digital transformation with AI-driven and
            data-backed solutions.
          </li>
          <li>
            Set new standards of creativity, performance, and customer
            satisfaction.
          </li>
          <li>
            Build a global presence by empowering businesses with sustainable
            digital growth.
          </li>
          <li>
            Inspire innovation through collaboration, expertise, and continuous
            improvement.
          </li>
        </ul>
      </div>
    ),
  },
];
