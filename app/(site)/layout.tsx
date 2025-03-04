import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs Portfolio + Sanity.io",
  description: "FreeCast Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">

        <header className="flex items-center justify-between bg-gray-100 p-3 ">
          <Link className="rounded-lg font-bold hover:scale-105 transition" 
                href="#projects">
                  My Projects
          </Link>{" "}
          <Link className="rounded-lg font-bold hover:scale-105 transition"  
                href="#contact">
                  Contact Me
          </Link>
        </header>

        <main className="py-20">{children}</main>

      </body>
    </html>
  );
}
