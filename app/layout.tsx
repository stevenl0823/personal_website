import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Wang (Steven) Liao | Business, Sports & Data Analytics',
  description:
    'Wang (Steven) Liao: quantitative research, sports business experience, and an analytical toolkit including SQL, Python, R, Tableau, and Excel. MIS PhD candidate at the University of Memphis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
