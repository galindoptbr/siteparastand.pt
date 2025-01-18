import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./src/components/Navbar";
import { Footer } from "./src/components/Footer";
import ScrollToTop from "./src/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Arrancada Web",
  description: "Alojamento Web e Cloud Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="text-zinc-700 bg-zinc-100">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
