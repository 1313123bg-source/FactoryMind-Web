import type { Metadata } from 'next';
import './globals.css';
import './factorymind-inner.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://factory-mind-web.vercel.app'),
  title: {
    default: 'FactoryMind — Intelligence for Industrial Systems',
    template: '%s | FactoryMind',
  },
  description: 'FactoryMind AI-powered industrial intelligence for modern manufacturing.',
  applicationName: 'FactoryMind',
  alternates: { canonical: '/' },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'FactoryMind — Intelligence for Industrial Systems',
    description: 'AI-powered industrial intelligence for modern manufacturing.',
    type: 'website',
    url: 'https://factory-mind-web.vercel.app/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
