"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../ui/image-slider";

export function Hero() {
  const images = [
    // "https://cdn.sanity.io/images/7zviw6k0/production/36058b2b9dda50df84f3765f41e3ab90cb3e3b2f-592x592.webp",
    // "https://cdn.sanity.io/images/7zviw6k0/production/1d72506d6a8f5afc4f24b19ba918e0f23f7c7b49-592x592.webp",
    // "https://cdn.sanity.io/images/7zviw6k0/production/cba799b70e963f01e9de5c9a0bfa315dfc72c0a1-592x592.webp",
    "/hero1.webp",
    "/hero2.webp",
    "/hero3.webp",
    "/hero4.webp",
    "/hero5.webp",
  ];

  return (
    <ImagesSlider className="h-screen" images={images} overlayClassName="bg-transparent">
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
      ></motion.div>
    </ImagesSlider>
  );
}
