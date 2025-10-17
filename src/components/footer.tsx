import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { footerData } from "@/constants/navigation-data";

export default function ModernFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-8  sm:py-16  px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-amber-500 rounded-lg rotate-45 transform origin-center"></div>
                <div className="absolute inset-[3px] bg-black rounded-lg flex items-center justify-center text-white font-bold">
                  R
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                RAD
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              Empowering businesses with AI-powered solutions that drive growth
              and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {footerData.map(({ key, label, items }) => (
            <div key={key}>
              <h3 className="text-lg font-bold mb-4">{label}</h3>
              <ul className="space-y-3">
                {items?.map(({ key, name, href }) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} RAD Media Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
