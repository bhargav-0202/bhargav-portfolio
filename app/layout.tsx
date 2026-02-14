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

export const metadata = {
  title: "Bhargav | Data Engineer",
  description:
    "I build scalable data platforms, analytics solutions, and automated data workflows. Explore my projects, skills, and experience.",
  keywords: [
    "Data Engineer",
    "Next.js Portfolio",
    "Cloud Data Engineering",
    "AWS",
    "Azure",
    "GCP",
  ],
  openGraph: {
    title: "Bhargav | Data Engineer",
    description:
      "Explore the portfolio of Bhargav Chelmela, Data Engineer specializing in cloud data engineering and analytics.",
    url: "https:///bhargav-portfolio.vercel.app",
    siteName: "Sai Bhargav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargav | Data Engineer",
    description:
      "Data Engineer portfolio showcasing skills, projects, and experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
