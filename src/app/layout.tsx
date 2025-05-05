import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Apartman Temizliği | Profesyonel Bina Temizlik Hizmeti | Hijyenik & Uygun Fiyatlı",
  description:
    "Apartman ve bina temizliği hizmetlerimizle yaşam alanlarınızı hijyenik ve düzenli tutuyoruz. Profesyonel ekibimizle kaliteli, hızlı ve uygun fiyatlı temizlik çözümleri sunuyoruz. Hemen teklif alın!",
  icons: "/favicon.ico",
  openGraph: {
    title:
      "Apartman Temizliği | Profesyonel Bina Temizlik Hizmeti | Hijyenik & Uygun Fiyatlı",
    description:
      "Apartman ve bina temizliği hizmetlerimizle yaşam alanlarınızı hijyenik ve düzenli tutuyoruz. Profesyonel ekibimizle kaliteli, hızlı ve uygun fiyatlı temizlik çözümleri sunuyoruz. Hemen teklif alın!",
    url: `${process.env.WEBSITE_URL}`,
    siteName: "Apartman Temizliği",
    images: [
      {
        url: `${process.env.WEBSITE_URL}/banner/yatay4.jpg`,
        width: 1200,
        height: 630,
        alt: "Apartman Temizliği Banner",
      },
    ],
    type: "website",
  },
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    title:
      "Apartman Temizliği | Profesyonel Bina Temizlik Hizmeti | Hijyenik & Uygun Fiyatlı",
    description:
      "Apartman ve bina temizliği hizmetlerimizle yaşam alanlarınızı hijyenik ve düzenli tutuyoruz. Profesyonel ekibimizle kaliteli, hızlı ve uygun fiyatlı temizlik çözümleri sunuyoruz. Hemen teklif alın!",
    images: {
      url: `${process.env.WEBSITE_URL}/banner/yatay4.jpg`,
      alt: "apartmantemizliği.com banner resmi",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable}  antialiased w-screen overflow-x-hidden`}
        >
          <Analytics />
          <Toaster toastOptions={{ duration: 5000 }} />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
