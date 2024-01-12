import { products } from "./data";
import { ProjectCard } from "@/components";

export const Projects = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proyectos</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum
            facere recusandae voluptatibus
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProjectCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
