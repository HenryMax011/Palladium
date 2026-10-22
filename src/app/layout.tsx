import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Outfit } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { organizationJsonLd, site } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Palladium Clínica de Estética | Tatuapé e Avenida Paulista",
    template: "%s | Palladium Estética",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.legalName,
    title: "Palladium Clínica de Estética | Tatuapé e Avenida Paulista",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#110f0d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${cormorant.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2"
        >
          Ir para o conteúdo
        </a>
        <Suspense fallback={<div className="site-header-bar sticky top-0 z-50 border-b border-gold/40 bg-night" />}>
          <Header />
        </Suspense>
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </body>
    </html>
  );
}
