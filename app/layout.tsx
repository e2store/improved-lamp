import type { Metadata } from "next";
import { Geist_Mono, Noto_Kufi_Arabic } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const arabic = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: {
      default: "حسابات الكويت PUBG | أرشيف العتاد",
      template: "%s | حسابات الكويت PUBG",
    },
    description:
      "سوق كويتي مستقل لعرض حسابات PUBG MOBILE الموثقة والجاهزة للنقل، مع تفاصيل العتاد والأسلحة قبل الشراء.",
    icons: { icon: "/favicon.png" },
    openGraph: {
      title: "حسابات 🇰🇼 PUBG",
      description: "افتح ملف الحساب قبل الشراء",
      locale: "ar_KW",
      type: "website",
      images: [{ url: socialImage, width: 1680, height: 935, alt: "حسابات الكويت PUBG — أرشيف العتاد" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "حسابات 🇰🇼 PUBG",
      description: "افتح ملف الحساب قبل الشراء",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${arabic.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
