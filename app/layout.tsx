import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vansh Sharma | Frontend Developer & Full-Stack Engineer",
  description: "Professional portfolio of Vansh Sharma — Frontend & Full-Stack Engineer specializing in Next.js, React, MERN/PERN stack, and AI SaaS applications.",
  keywords: ["Vansh Sharma", "Frontend Developer", "Full-Stack Engineer", "Next.js", "React", "TypeScript", "Tailwind CSS", "MERN Stack", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-gray-100 bg-grid-pattern">
        {children}
      </body>
    </html>
  );
}
