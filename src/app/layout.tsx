import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from "./_components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apartman Temizliği | Profesyonel ve Güvenilir Hizmet",
  description:
    "Apartman ve site temizliği konusunda profesyonel ve güvenilir hizmet sunuyoruz. Hijyenik, düzenli ve ferah yaşam alanları için bizimle iletişime geçin",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:px-[2vw] overflow-x-hidden`}
      >
        <Banner />
        {children}
      </body>
    </html>
  );
}
