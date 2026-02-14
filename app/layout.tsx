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
  title: "Bhargav Chelmela | Data Engineer",
  description:
    "Portfolio of Bhargav Chelmela — Data Engineer specializing in cloud data platforms, analytics, and scalable data systems.",
  openGraph: {
    title: "Bhargav Chelmela | Data Engineer",
    description:
      "Portfolio of Bhargav Chelmela — Data Engineer specializing in cloud data platforms, analytics, and scalable data systems.",
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
