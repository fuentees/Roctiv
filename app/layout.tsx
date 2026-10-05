import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/layout/NoiseOverlay";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software sob medida`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ROCTIV",
    "software sob medida",
    "desenvolvimento de sistemas web",
    "desenvolvimento de aplicativos",
    "automação de processos",
    "desenvolvimento de software",
    "plataformas",
    "aplicativos",
    "tecnologia",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Software sob medida`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software sob medida`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="flex min-h-screen flex-col antialiased"
        suppressHydrationWarning
      >
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <NoiseOverlay />
        <Header />
        <main id="conteudo" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
