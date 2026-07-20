import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kapil Jain - Portfolio",
  description: "Kapil Jain's personal website showcasing expertise in blockchain, enterprise architecture, and digital transformation.",
  authors: [{ name: "Kapil Jain" }],
  openGraph: {
    images: [{ url: "/og-image.png" }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
