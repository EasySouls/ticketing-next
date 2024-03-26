import type { Metadata } from 'next';
import { Akshar } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from '@/components/Providers';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/toaster';

const akshar = Akshar({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticketing',
  description: 'Manage error tickets and issues for your projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={akshar.className}>
        <Providers>
          <NextTopLoader />
          <Header />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
