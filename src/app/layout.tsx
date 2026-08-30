import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shell/Header";
import { Footer } from "@/components/shell/Footer";
import { PageTransition } from "@/components/foundations/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaviram.vercel.app"),
  title: "Kaviram Paramasivan | Data Engineer",
  description: "Data Engineer focused on Azure, Databricks, PySpark, data platforms and AI/GenAI applications.",
  robots: "index, follow",
  openGraph: {
    title: "Kaviram Paramasivan | Data Engineer",
    description: "Data Engineer focused on Azure, Databricks, PySpark, data platforms and AI/GenAI applications.",
    type: "website",
    locale: "en_US",
    url: "https://kaviram.vercel.app",
    siteName: "Kaviram Paramasivan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaviram Paramasivan | Data Engineer",
    description: "Data Engineer focused on Azure, Databricks, PySpark, data platforms and AI/GenAI applications.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
