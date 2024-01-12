import React from "react";
import Image from "next/image";

type Props = {
  product: {
    id: number;
    name: string;
    href: string;
    price: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
  project: any;
};

export const ProjectCard: React.FC<Props> = ({ product, project }) => {
  return (
    <a key={product.id} href={`proyectos/${project.slug}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={200}
          height={200}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{product.name}</h3>
        {/* <p>{product.price}</p> */}
      </div>
      {/* <p className="mt-1 text-sm italic text-gray-500">{product.description}</p> */}
    </a>
  );
};
