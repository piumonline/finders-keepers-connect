import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import PageIllustration from "@/components/page-illustration";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finders Keepers Connect",
  description: "Finders Keepers Connect is a platform to help you find your lost items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
       <PageIllustration />
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
