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
    <div>
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
          {project.name}
        </h1>
      </header>
      {/* content is PortableTextBlock - array of blocks - and not assignable to ReactNode */}
      <div className="text-lg mt-5">
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
    </div>
  );
}
