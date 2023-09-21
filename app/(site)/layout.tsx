import { getPages } from '@/sanity/sanity-utils';
import type { Metadata } from 'next';
import Link from 'next/link';
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
  // get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            codeSerg logo
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}

// disable caching for fetch requests
export const dynamic = 'force-dynamic';
