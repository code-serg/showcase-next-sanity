import { getPages } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function Header() {
  // get all pages
  const pages = await getPages();

  return (
    <div className="flex items-center justify-between text-3xl">
      <Link
        href="/"
        className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-bold"
      >
        Showcase
      </Link>
      <div className="flex items-center gap-5 text-lg text-gray-600">
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
    </div>
  );
}
