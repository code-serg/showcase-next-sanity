import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h3>Projects</h3>
      {projects.map((project) => (
        <div key={project._id}>
          <h4>{project.name}</h4>
          <p>{project.slug}</p>
        </div>
      ))}
    </>
  );
}
