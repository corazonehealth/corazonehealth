import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({ 
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700' ],
    variable: '--font-oswald'
  });

const roboto = Roboto({ 
    subsets: ["latin"],
    weight: ['100', '300', '400', '500', '700', '900' ],
    variable: '--font-oswald'
  });

export const metadata: Metadata = {
  title: "CoraZone",
  description: "Get in your zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body className={`${oswald.className} ${roboto.className} w-full max-w-[1920px]
      mx-auto bg-white
      `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
