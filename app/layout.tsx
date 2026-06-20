import type { Metadata } from 'next';
import { Geist } from "next/font/google";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import "./globals.css";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Plenum',
  description: 'Plenum Inc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
