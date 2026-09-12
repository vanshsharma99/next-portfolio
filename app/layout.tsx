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
  title: "Alex Rivera | Full-Stack Software Engineer & UI Architect",
  description: "Professional portfolio showcasing web development projects, technical skills, interactive CLI terminal, career experience, and contact channels.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
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
