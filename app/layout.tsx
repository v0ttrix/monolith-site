import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  title: "USHAYAT HOLDINGS",
  description: "Chicago-based real estate company. We buy, renovate, and sell homes.",
  openGraph: {
    siteName: "USHAYAT HOLDINGS",
    type: "website",
    url: "https://www.ushayat.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${bodoni.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bone text-charcoal font-body overflow-x-hidden selection:bg-accent selection:text-white">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
