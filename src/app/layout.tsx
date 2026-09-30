import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Atlas Studio — Practical Digital Resources for Modern Work",
    template: "%s | Atlas Studio",
  },
  description:
    "Templates, guides, tools, and practical resources for developers, creators, freelancers, and digital professionals.",
  openGraph: {
    title: "Atlas Studio — Practical Digital Resources for Modern Work",
    description: "Templates, guides, tools, and practical resources for developers, creators, freelancers, and digital professionals.",
    siteName: "Atlas Studio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Atlas Studio — Practical Digital Resources for Modern Work",
    description: "Templates, guides, tools, and practical resources for developers, creators, freelancers, and digital professionals.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
