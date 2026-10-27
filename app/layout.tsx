import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { LoaderProvider } from "./contexts/LoaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ridhanya Ethnic",
  description: "Premium Saree Collections",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-[#F8F4ED]">
        <LoaderProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}