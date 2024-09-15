import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "テスト用のサイトです",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "テスト用のサイトです",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
