import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import { NavMenu } from "@/components/layout/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MBZ Photos App",
  description: "Site for managing images",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        {/* Show NavMenu only for mobile devices */}
        <div className="lg:hidden md:hidden">
          <NavMenu />
        </div>
        <div className="flex">
          <div className="hidden md:block lg:block">
          <SideBar />
          </div>
          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
