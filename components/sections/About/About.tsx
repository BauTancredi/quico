import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="xl:mx-auto xl:max-w-7xl px-6 lg:px-8">
        <div className="">
          <picture>
            <source media="(max-width: 768px)" srcSet="/quico_mobile.webp" />
            <img
              src="/quico.jpg"
              alt="About us image"
              // fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover xl:rounded-3xl"
              // priority
            />
          </picture>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl  py-8 text-center">
            Sobre Nosotros
          </h2>
          <p className="text-lg leading-8 text-center lg:text-left">
            En Guillem Branding, creamos experiencias visuales que inspiran, cautivan y perduran en
            la mente de quienes las experimentan. Tu marca es única, y tu diseño también debería
            serlo. Trabajamos estrechamente contigo para entender tu visión y luego la elevamos a
            nuevas alturas. Cada elemento es meticulosamente creado para destacar tu identidad de
            manera inconfundible. Nuestro compromiso con la excelencia y la atención al detalle nos
            ha permitido ganar la confianza de una amplia gama de clientes, desde startups locales
            hasta empresas internacionales.
          </p>
        </div>
      </div>
    </section>
  );
};
