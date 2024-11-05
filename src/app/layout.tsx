import React from "react";

import "./globals.css";
import NavBar from "@/components/navbar";
import {
  Inter,
  // Inconsolata,
  // Roboto,
} from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] });
// const inconsolata = Inconsolata({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: '400'});

export const metadata: Metadata = {
  title: "Hardwhy",
  description: "Udemy Course 1",
  keywords: ["Udemy", "Learning", "LMS"],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
