import '../globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

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
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            codeSerg
          </Link>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
