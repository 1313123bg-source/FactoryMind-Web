import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'FactoryMind', description: 'Intelligence for industrial systems.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bg"><body>{children}</body></html>;
}
