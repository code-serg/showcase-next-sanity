import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <p className="mt-3 text-xl"> Featuring</p>
      <h1 className="text-5xl font-extrabold">
        <span className="text-orange-400">
          Next<span className="text-sm">.js</span> & Sanity.io
        </span>{' '}
      </h1>
      <h2 className="mt-20 font-bold text-3xl">Content</h2>
      <div>The content can be created and edited within Sanity Studio!</div>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            // go to route 'projects' and pass the slug as a prop
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-gray-500 transition-all duration-500 ease-in-out"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={700}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold text-orange-400 mt-2">
              {project.name}
            </div>
            <p>{project.slug}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
