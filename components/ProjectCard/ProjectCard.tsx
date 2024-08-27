import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ProjectType } from "@/types";

type Props = {
  project: ProjectType;
};

const renderBadge = (category: string) => {
  switch (category) {
    case "web":
      return (
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {category}
        </span>
      );
    case "mobile":
      return (
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {category}
        </span>
      );
    case "desktop":
      return (
        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {category}
        </span>
      );
  }
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <a key={project.name} href={`/proyectos/${project.slug}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1">
        <Image
          src={project.coverImage?.image}
          alt={project.coverImage?.alt}
          className="h-full w-full object-cover object-center"
          width={200}
          height={200}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{project.name}</h3>
        {renderBadge(project.category)}
      </div>
    </a>
  );
};
