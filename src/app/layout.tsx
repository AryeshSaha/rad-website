import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import ModernHeader from "@/components/header";
import ModernFooter from "@/components/footer";
import ScrollToHash from "@/components/scrollToHash";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "RAD Media Solutions",
    template: "%s | RAD Media Solutions",
  },
  description:
    "Rad Media Solutions is a full-service digital marketing agency specializing in SEO, PPC, social media marketing, and web design to help businesses grow online.",
  generator: "Aryesh Saha",
  applicationName: "RAD Media Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModernHeader />
          <main>
            <ScrollToHash />
            {children}
             <Toaster />
          </main>
          <ModernFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
