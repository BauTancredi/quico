import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-gray-50">
      <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          src="/quico.jpg"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          width={2832}
          height={1416}
        />
      </div>
      <div className="mx-auto max-w-2xl lg:mx-0 xl:mx-auto xl:max-w-7xl xl:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl  py-8">Sobre Nosotros</h2>
        <p className="text-lg leading-8 ">
          En Guillem Branding, creamos experiencias visuales que inspiran, cautivan y perduran en la
          mente de quienes las experimentan. Tu marca es única, y tu diseño también debería serlo.
          Trabajamos estrechamente contigo para entender tu visión y luego la elevamos a nuevas
          alturas. Cada elemento es meticulosamente creado para destacar tu identidad de manera
          inconfundible. Nuestro compromiso con la excelencia y la atención al detalle nos ha
          permitido ganar la confianza de una amplia gama de clientes, desde startups locales hasta
          empresas internacionales.
        </p>
      </div>
    </section>
  );
};
