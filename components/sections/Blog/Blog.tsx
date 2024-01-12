import { posts } from "./data";
import { BlogCard } from "@/components";

export const Blog = () => {
  return (
    <div className="bg-black py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Novedades</h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum
            facere recusandae voluptatibus
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
