import { PortableTextBlock } from "sanity";

export type ProjectType = {
  name: string;
  category: string;
  slug: string;
  coverImage: {
    alt: string;
    image: string;
  };
  images: {
    alt: string;
    image: string;
  }[];
  description: PortableTextBlock[];
  fullDescription: PortableTextBlock[];
};

export type BlogType = {
  name: string;
  coverImage: {
    alt: string;
    image: string;
  };
};
