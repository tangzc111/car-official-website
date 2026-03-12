import type { Metadata } from "next";

import "@/app/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ApexGloss | 汽车养护用品官网",
    template: "%s | ApexGloss",
  },
  description: "高端汽车养护用品与漆面保护解决方案官网，覆盖隐形车衣、纳米陶瓷涂层与专业施工服务。",
  keywords: ["汽车养护用品", "隐形车衣", "纳米陶瓷涂层", "汽车美容", "汽车漆面保护"],
  openGraph: {
    title: "ApexGloss | 汽车养护用品官网",
    description: "高端汽车养护用品与漆面保护解决方案官网。",
    url: siteUrl,
    siteName: "ApexGloss",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
