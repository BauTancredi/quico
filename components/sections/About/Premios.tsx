import React from "react";
import Image from "next/image";

const premios = [
  {
    name: "1er. Premio Introducción al lenguaje Visual.Afiche latinoamerica Soy Yo. Julieta Selem.",
    year: "2012",
  },
  {
    name: "1er. Premio Publicidad I. Luciana Pelloli. Afiche Publicitario.",
    year: "2012",
  },
  {
    name: "2do. Premio Diseño de Imagen de Marcas. Verónica Kurz.",
    year: "2013",
  },
  {
    name: "1er. Premio Diseño Tridimensional I.Roberto Céspedes.",
    year: "2013",
  },
  {
    name: "1er Premio Ensayos sobre la Imagen. Art Toys. Dino Bruzzone.Publicado en Creación y Producción en Diseño, Nº 54.",
    year: "2013",
  },
  {
    name: "2do. Premio Diseño de Packaging I. Gustavo Pagliólico.",
    year: "2013",
  },
  {
    name: "2do. Premio Introd. al Discurso Audiovisual. Diego Herrera.",
    year: "2013",
  },
];

export const Premios = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="xl:mx-auto xl:max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl  py-8 text-center">
          Premios y Reconocimientos
        </h2>
        <div>
          <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {premios.map((item) => (
              <li
                key={item.name}
                className="items-center space-y-4 rounded-lg bg-white px-6 py-8 shadow-lg"
              >
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
