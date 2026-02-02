import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Devanagari } from "next/font/google";
import "./globals.css";
import Template from "@/components/template";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anekDevanagari = Anek_Devanagari({
  variable: "--font-anek-devanagari",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Personal Hub",
  description: "A clean and minimalist developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anekDevanagari.variable} antialiased`}
      >
        <Template>
          {children}
        </Template>
      </body>
    </html>
  );
}
