import { getBlogs } from "@/sanity/sanity.query";
import { posts } from "./data";
import { BlogCard } from "@/components";
import { BlogType } from "@/types";

export const Blog = async () => {
  const blogs: BlogType[] = await getBlogs();
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Novedades</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard post={blog} key={blog.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
