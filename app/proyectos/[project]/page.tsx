// "use client";

import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/sections";

type Props = {
  params: {
    project: string;
  };
};

export default async function ProyectoPage({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 lg:py-24 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <Breadcrumb slug={project.name} />
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {project.name}
            </h2>
            <div className="mt-3 max-w-3xl text-lg text-gray-600">
              <PortableText value={project.description} />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  src={project.images[0].image}
                  alt={""}
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  src={project.images[1].image}
                  alt={""}
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto max-w-2xl px-4 lg:py-24 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500">{project.category}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {project.name}
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {project.description && (
                <div>
                  <dt className="text-lg font-medium text-gray-900">Descripción</dt>
                  <dd className="mt-3 text-lg text-gray-500 max-w-lg text-justify">
                    <PortableText value={project.fullDescription} />
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={project.images[2].image}
                alt={""}
                className="h-full w-full object-cover object-center"
                width={200}
                height={200}
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={project.images[3].image}
                  alt={""}
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={project.images[4].image}
                  alt={""}
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 lg:py-24 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-16  sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {project.images.slice(5).map((image, index) => (
            <div key={index} className="flex flex-col-reverse">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={image.image}
                  alt={""}
                  className="object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
