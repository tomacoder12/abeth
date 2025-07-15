import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abeth LLC – Health and Wellness Solutions",
  description: "Discover holistic health and wellness services at Abeth LLC. Empowering you to live a healthier, balanced life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Nav should be above everything */}
        <div className="relative z-20">
          <Nav />
        </div>
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
