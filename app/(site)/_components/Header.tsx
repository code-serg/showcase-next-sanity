import { getPages } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  // get all pages
  const pages = await getPages();

  return (
    <div className="flex items-center justify-between text-3xl">
      <Link
        href="/"
        className="flex items-center gap-3 font-bold hover:text-orange-400"
      >
        <Image
          src="/2023-09-22-dev-showcase.png"
          alt="DS Logo"
          width={80}
          height={80}
          priority
        />
        Dev Showcase
      </Link>
      <div className="flex items-center gap-8 text-lg">
        {pages.map((page) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="hover:text-orange-400"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
