import type { Metadata } from 'next';
import './globals.css';
import './factorymind-inner.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://factory-mind-web.vercel.app'),
  title: {
    default: 'FactoryMind — Intelligence for Industrial Systems',
    template: '%s | FactoryMind',
  },
  description:
    'FactoryMind свързва машини, процеси, знания и хора в интелигентна система за индустриална диагностика и решения.',
  applicationName: 'FactoryMind',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'FactoryMind',
    'industrial intelligence',
    'industrial diagnostics',
    'factory software',
    'PLC diagnostics',
    'машинна диагностика',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'FactoryMind — Intelligence for Industrial Systems',
    description:
      'Интелигентният слой между хората, машините и знанията.',
    type: 'website',
    url: 'https://factory-mind-web.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryMind — Intelligence for Industrial Systems',
    description:
      'Интелигентният слой между хората, машините и знанията.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
