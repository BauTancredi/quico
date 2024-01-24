import { getProjects } from "@/sanity/sanity.query";
import { ProjectCard } from "@/components";
import { ProjectType } from "@/types";

export const Projects = async () => {
  const projects: ProjectType[] = await getProjects();

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proyectos</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {projects.map((project) => (
            <>
              <ProjectCard key={project.name} project={project} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
