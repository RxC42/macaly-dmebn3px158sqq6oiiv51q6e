import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ["latin", "latin-ext"], 
  variable: '--font-roboto',
});

const oswald = Oswald({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin", "latin-ext"], 
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: "M1 Army Shop - Testováno na lidech !",
  description: "Vojenské vybavení, oblečení a doplňky pro armádu a military nadšence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="dark">
      <body className={`${roboto.variable} ${oswald.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}