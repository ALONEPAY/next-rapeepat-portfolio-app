import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rapeepat Thiamphon - Portfolio",
  description: "Portfolio website of Rapeepat Thiamphon - นายระพีพัฒน์ เทียมผล",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Prompt:wght@400;600;700&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-950 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
