import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  // params is { project: '<slug_of_project>' }.
  // the property name 'project' was defined by the name of the parent directory of this file.
  // In this case, by the directory '[project]'
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-gray-200 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-300 hover:text-black transition-all"
        >
          View Project
        </a>
      </header>
      {/* content is PortableTextBlock - array of blocks - and not assignable to ReactNode */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      {/* image */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-400 rounded-lg object-cover rounded-xl"
      />
      {project.name} {project.slug}{' '}
    </div>
  );
}
