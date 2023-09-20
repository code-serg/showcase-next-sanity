import { getProject } from '@/sanity/sanity-utils';

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

  return <div> {project.name} </div>;
}
