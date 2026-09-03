import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-Roboto",
});

export const metadata: Metadata = {
  title: "Muhammed Khaled | Frontend Developer & Systems Solutions Engineer",
  description:
    "Portfolio of Muhammed Khaled Saleh - Frontend Developer & Systems Solutions Engineer. Ex-Military Engineer Officer & MTC Honors Graduate, specializing in React.js, Next.js, TypeScript, and Data-Driven Dashboards.",
  keywords: [
    "Muhammed Khaled",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Power BI",
    "SQL Server",
    "Web Developer Cairo",
  ],
  authors: [{ name: "Muhammed Khaled" }],
  creator: "Muhammed Khaled",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "scroll-smooth", roboto.variable, geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
