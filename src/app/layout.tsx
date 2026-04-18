import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malatya Avukat | Vahap Solmazgül Hukuk & Danışmanlık",
  description: "Malatya'da ceza, aile ve ticaret hukuku alanında uzman avukatlık hizmeti. Av. Vahap Solmazgül ile haklarınızı profesyonelce savunun.",
  keywords: ["Malatya Avukat", "Ceza Avukatı", "Aile Hukuku", "Ticaret Hukuku", "Vahap Solmazgül", "Hukuk Danışmanlık"],
  authors: [{ name: "Vahap Solmazgül" }],
  openGraph: {
    title: "Malatya Avukat | Vahap Solmazgül Hukuk & Danışmanlık",
    description: "Uzman Avukatlık ve Danışmanlık Hizmetleri",
    url: "https://vahapsolmazgul.av.tr", 
    siteName: "Vahap Solmazgül Hukuk",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malatya Avukat | Vahap Solmazgül Hukuk & Danışmanlık",
    description: "Malatya'da uzman avukatlık hizmeti.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Vahap Solmazgül Hukuk & Danışmanlık",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Malatya Park Ofis, İnönü, Kat:3 Daire:18",
                "addressLocality": "Yeşilyurt",
                "addressRegion": "Malatya",
                "postalCode": "44100",
                "addressCountry": "TR"
              },
              "description": "Malatya'da ceza, aile ve ticaret hukuku alanında uzman avukatlık hizmeti.",
              "url": "https://vahapsolmazgul.av.tr",
              "telephone": "+905372148445",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body>
        <div className="malatya-texture">MALATYA HUKUK</div>
        <main className="relative z-10">{children}</main>
        
        {/* Floating WhatsApp CTA */}
        <a
          href="https://wa.me/905372148445"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp üzerinden iletişime geçin"
        >
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.062c-3.414 0-6.188 2.774-6.188 6.189 0 1.094.281 2.156.813 3.094l-.875 3.203 3.266-.859c.906.516 1.938.813 3.016.813 3.414 0 6.188-2.774 6.188-6.189 0-3.415-2.774-6.251-6.219-6.251zm3.938 8.859c-.172.484-.969.891-1.344.938-.344.047-.797.078-1.281-.078-.313-.094-.703-.219-1.203-.438-2.109-.906-3.484-3.047-3.594-3.203-.109-.156-.891-1.188-.891-2.281 0-1.094.578-1.625.781-1.844.203-.219.453-.266.594-.266h.422c.141 0 .328 0 .469.328.156.391.531 1.313.578 1.406.047.094.078.219 0 .359-.078.141-.125.219-.25.359-.125.141-.266.313-.375.422-.125.125-.25.266-.109.5.141.234.625 1.031 1.344 1.672.922.813 1.703 1.062 1.938 1.188.234.125.375.109.516-.047.141-.156.594-.688.75-.922.156-.234.313-.188.531-.109s1.406.656 1.641.781c.234.125.391.188.453.297.063.109.063.641-.109 1.125z" />
          </svg>
        </a>
      </body>
    </html>

  );
}
