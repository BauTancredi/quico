"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../ui/image-slider";

export function Hero() {
  const images = [
    "https://cdn.sanity.io/images/7zviw6k0/production/36058b2b9dda50df84f3765f41e3ab90cb3e3b2f-592x592.webp",
    "https://cdn.sanity.io/images/7zviw6k0/production/1d72506d6a8f5afc4f24b19ba918e0f23f7c7b49-592x592.webp",
    "https://cdn.sanity.io/images/7zviw6k0/production/cba799b70e963f01e9de5c9a0bfa315dfc72c0a1-592x592.webp",
  ];

  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          GUILLEM BRANDING
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
