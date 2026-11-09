import type { Metadata } from 'next';
import { Geist } from "next/font/google";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LanguageProvider from '@/components/i18n/LanguageProvider';
import "./globals.css";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Plenum',
  description: 'Making every human action AI-executable. 株式会社Plenumは、AIエージェントに業務をみせて教えるノーコードAXソリューション「Hydrangea」を開発しています。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={geist.variable}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
