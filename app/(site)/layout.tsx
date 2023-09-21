import type { Metadata } from 'next';
import '../globals.css';
import Header from './_components/Header';

export const metadata: Metadata = {
  title: 'codeSerg Sample',
  description: 'Sample code showcase. Generated with Next.js and Sanity.io',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" style={{ height: '100%' }}>
      <body className="max-w-5xl mx-auto py-10 bg-gradient-to-b from-cyan-950 to-cyan-800">
        <Header />
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}

// disable caching for fetch requests
export const dynamic = 'force-dynamic';
