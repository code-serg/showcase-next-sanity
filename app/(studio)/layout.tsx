import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'codeSerg Sample',
  description: 'Sample code showcase. Generated with Next.js and Sanity.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
