import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Fireworks from "./components/Fireworks";
import BackToTop from "./components/BackToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zhangxin-hiter.github.io"),
  title: "张昕 - 个人主页",
  description: "哈尔滨工业大学(深圳)通信工程本科生，嵌入式系统开发工程师，专注于单片机开发和智能硬件设计。",
  keywords: ["张昕", "哈尔滨工业大学", "通信工程", "嵌入式开发", "STM32", "单片机"],
  authors: [{ name: "张昕" }],
  openGraph: {
    title: "张昕 - 个人主页",
    description: "哈尔滨工业大学(深圳)通信工程本科生，嵌入式系统开发工程师",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/photo.jpg", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "张昕 - 个人主页",
    description: "哈尔滨工业大学(深圳)通信工程本科生，嵌入式系统开发工程师",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "zh-CN": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Fireworks />
          <Nav />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
