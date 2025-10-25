import type { Metadata } from "next";
import { Oxanium, Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "杨毅睿|求职简历",
  description: "物流管理专业 · 数据分析与供应链数智化专家 | 同济大学 | 施耐德电气实习生 | AI Agent开发与供应链优化",
  keywords: "物流管理, 供应链, 数据分析, AI采购, 施耐德电气, 同济大学, 杨毅睿",
  authors: [{ name: "杨毅睿" }],
  openGraph: {
    title: "杨毅睿|求职简历",
    description: "物流管理专业 · 数据分析与供应链数智化专家",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${oxanium.variable} ${rajdhani.variable} ${inter.variable} font-inter antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        {/* 苹果式简洁背景 */}
        <div className="fixed inset-0 z-0 bg-gray-50" />
        
        {/* 内容层 */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
