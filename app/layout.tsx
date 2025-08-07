import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "700"],
});
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manabii - Japanese Language Learning",
  description:
    "Learn Japanese with our beautiful, comprehensive language program. Master N5 to N1 levels with authentic Japanese teaching methods.",
  keywords: "Japanese, language learning, N5, N4, N3, N2, N1, JLPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} font-japanese antialiased`}>
        {children}
      </body>
    </html>
  );
}
