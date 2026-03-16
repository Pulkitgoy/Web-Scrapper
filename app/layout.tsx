import type { Metadata } from "next";
import { Inter , Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] , weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "WiseBuy",
  description: "Save money by tracking prices of your favorite products. Get notified when prices drop and never miss a deal again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w mx-auto">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
