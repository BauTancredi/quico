import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

import Breadcrumb from "@/components/Breadcrumb";
import { Footer } from "@/components/sections";

const features = [
  {
    name: "Sleek design",
    description:
      "The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.",
  },
  {
    name: "Comfort handle",
    description: "Shaped for steady pours and insulated to prevent burns.",
  },
  {
    name: "One-button control",
    description:
      "The one button control has a digital readout for setting temperature and turning the kettle on and off.",
  },
  {
    name: "Long spout",
    description: "Designed specifically for controlled pour-overs that don't slash or sputter.",
  },
];

const features2 = [
  {
    name: "Three card types",
    description: "Today, Next, and Someday cards allow you to defer your dreams into the future.",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg",
    imageAlt: "Green cardstock box containing white, beige, and brown cards.",
  },
  {
    name: "The perfect mix",
    description:
      "Each refill pack contains plenty of cards to last you a month of procrastination.",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg",
    imageAlt: "Green cardstock box open with 50 cards inside.",
  },
  {
    name: "Dot grid backs",
    description: "Flip a card over to doodle during meetings when you should be listening.",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg",
    imageAlt: "Detail of white today card, beige next card, and brown someday card with dot grid.",
  },
  {
    name: "Refill packs",
    description: "Subscribe and save on routine refill packs to keep you productive all year long.",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg",
    imageAlt: "Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.",
  },
];

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  console.log(params);
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || "add-a-fallback-project-image-here",
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Proyecto({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  console.log(project);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <Breadcrumb />
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              The Fine Details
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Our patented padded snack sleeve construction protects your favorite treats from
              getting smooshed during all-day adventures, long shifts at work, and tough travel
              schedules.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220
                standard gumballs, or any combination of on-the-go treats that your heart desires.
                Yes, we did the math.
              </p>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                  alt="Front zipper pouch with included key ring."
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Up your snack organization game with multiple compartment options. The quick-access
                stash pouch is ready for even the most unexpected snack attacks and sharing needs.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500">Machined Kettle</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Elegant simplicity
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
                width={200}
                height={200}
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <h2 id="features-heading" className="font-medium text-gray-500">
            Focus
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple productivity
          </p>
          <p className="mt-4 text-gray-500">
            Focus allows you to plan 10 daily tasks, while also thinking ahead about whats next.
            Forget distracting digital apps and embrace these small, sturdy pieces of paper.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features2.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
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
