import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FactoryMind — Intelligence for Industrial Systems',
  description:
    'FactoryMind свързва машини, процеси, знания и хора в интелигентна система за индустриална диагностика и решения.',
  keywords: [
    'FactoryMind',
    'industrial intelligence',
    'industrial diagnostics',
    'factory software',
    'PLC diagnostics',
    'машинна диагностика',
  ],
  openGraph: {
    title: 'FactoryMind — Intelligence for Industrial Systems',
    description:
      'Интелигентният слой между хората, машините и знанията.',
    type: 'website',
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
