import type { Metadata } from 'next';
import Header from './_components/Header';
import Footer from './_components/Footer';
import '../globals.css';

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
      <body className="mx-auto max-w-5xl px-10 py-10 bg-gradient-to-b from-cyan-950 to-cyan-800 text-gray-200">
        <Header />
        <main className="py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// disable caching for fetch requests
export const dynamic = 'force-dynamic';
