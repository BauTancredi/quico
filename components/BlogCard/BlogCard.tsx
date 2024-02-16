import React from "react";
import Image from "next/image";
import { BlogType } from "@/types";

type Props = {
  post: BlogType;
};

export const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <Image
          src={post.coverImage.image}
          alt={post.coverImage.alt}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="group relative">
          <h3 className="mt-3  leading-6  group-hover:text-gray-600">
            <span className="absolute inset-0" />
            {post.name}
          </h3>
        </div>
      </div>
    </article>
  );
};
