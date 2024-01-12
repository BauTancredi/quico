import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      category,
      coverImage { alt, "image": asset->url },
    }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      images[] { alt, "image": asset->url },
      category,
      description,
      fullDescription,
    }`,
    { slug }
  );
}

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog"]{
      _id, 
      name,
      coverImage { alt, "image": asset->url },
    }`
  );
}
