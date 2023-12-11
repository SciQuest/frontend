import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SciQuest",
  description: "scientific articles search engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
