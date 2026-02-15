import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "张昕 - 个人主页 | Xin Zhang - Personal Website",
  description: "哈尔滨工业大学(深圳)通信工程本科生 | Telecommunications Engineering Undergraduate at HIT Shenzhen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="antialiased">
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
