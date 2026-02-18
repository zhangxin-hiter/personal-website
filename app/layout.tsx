import type { Metadata, Viewport } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Fireworks from "./components/Fireworks";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import FloatingDock from "./components/FloatingDock";
import PageLoader from "./components/PageLoader";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import "katex/dist/katex.min.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zhangxin-hiter.github.io"),
  title: "张昕 - 个人主页",
  description: "哈尔滨工业大学(深圳)通信工程本科生，嵌入式系统开发工程师，专注于单片机开发和智能硬件设计。",
  keywords: ["张昕", "哈尔滨工业大学", "通信工程", "嵌入式开发", "STM32", "单片机"],
  authors: [{ name: "张昕" }],
  creator: "张昕",
  publisher: "张昕",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "张昕 - 个人主页",
    description: "哈尔滨工业大学(深圳)通信工程本科生，嵌入式系统开发工程师",
    type: "website",
    locale: "zh_CN",
    siteName: "张昕的个人主页",
    images: [{ url: "/photo.jpg", width: 400, height: 400, alt: "张昕" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "张昕 - 个人主页",
    description: "哈尔滨工业大学(深圳)通信工程本科生，嵌入式系统开发工程师",
    images: ["/photo.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "zh-CN": "/",
    },
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/photo.jpg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          跳转到主要内容
        </a>
        <ThemeProvider>
          <PageLoader />
          <ScrollProgress />
          <Fireworks />
          <Nav />
          <main id="main-content" className="min-h-screen" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BackToTop />
          <FloatingDock
            items={[
              { icon: <span>🏠</span>, label: "Home", href: "#" },
              { icon: <span>🎓</span>, label: "Education", href: "#education" },
              { icon: <span>💻</span>, label: "Projects", href: "#projects" },
              { icon: <span>🛠</span>, label: "Skills", href: "#skills" },
              { icon: <span>🏆</span>, label: "Awards", href: "#awards" },
              { icon: <span>📧</span>, label: "Contact", href: "#contact" },
            ]}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
