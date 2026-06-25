import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kashmir Global | Phones & Accessories',
  description: 'Shop quality smartphones, chargers, earbuds, smartwatches and mobile accessories from Kashmir Global.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
