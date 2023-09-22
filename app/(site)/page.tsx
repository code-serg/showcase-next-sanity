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
      <div>(Content is created and edited within Sanity Studio! )</div>
      <h2 className="mt-20 font-bold text-3xl">Landscapes</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            // go to route 'projects' and pass the slug as a prop
            href={`/projects/${project.slug}`}
            key={project._id}
            className="flex flex-col justify-between border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-gray-500 transition-all"
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
            <div className="font-extrabold text-orange-400 my-3 text-center">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
