// check the next-sanity docs for more info - https://github.com/sanity-io/next-sanity

'use client';

import config from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
