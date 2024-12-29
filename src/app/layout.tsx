import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stuy Fusion 479",
  description:
    "Stuy Fusion is an award-winning FIRST Tech Challenge team based in New York City. Our mission is to create a robot viable for the highest levels of competition while staying true to the principles of FIRST by giving back to our communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
