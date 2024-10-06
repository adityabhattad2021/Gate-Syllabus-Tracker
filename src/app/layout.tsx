import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import RootLayoutClient from '@/components/root-layout-client';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyllabiGenius | Track Your Syllabus and Prepare for Exams",
  description: "SyllabiGenius  aims to simplify exam preparation by providing an intuitive interface for managing study materials and monitoring progress for various exams starting from GATE.",
  keywords: ["syllabus tracker", "exam preparation", "study planner", "academic organizer", "student tool", "Gate 2025", "Gate 2026", "GATE 2025", "GATE 2026"],
  authors: [{ name: "Aditya Bhattad" }],
  openGraph: {
    title: "SyllabiGenius | Your Ultimate Study Companion",
    description: "Track your syllabus, manage your study schedule, and ace your exams with SyllabiGenius.",
    url: "https://syllabigenius.vercel.app/",
    siteName: "SyllabiGenius",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-192x192.png",
        alt: "SyllabiGenius | Track Your Syllabus and Prepare for Exams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyllabiGenius | Track Your Syllabus and Prepare for Exams",
    description: "SyllabiGenius  aims to simplify exam preparation by providing an intuitive interface for managing study materials and monitoring progress for various exams starting from GATE.",
    creator: "@bhattad_aditya",
    images: [
      {
        url: "/web-app-manifest-192x192.png",
        alt: "SyllabiGenius | Track Your Syllabus and Prepare for Exams",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-zinc-900`}>
        <RootLayoutClient>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Analytics />
        </RootLayoutClient>
      </body>
    </html>
  );
}
