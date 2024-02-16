import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-gray-50">
      <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          width={2832}
          height={1416}
        />
      </div>
      <div className="mx-auto max-w-2xl lg:mx-0 xl:mx-auto xl:max-w-7xl xl:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl  py-8">Sobre Nosotros</h2>
        <p className="text-lg leading-8 ">
          GUILLEM BRANDING es un estudio dedicado a trabajos de Diseño Gráfico y comunicación Visual
          con, base en Buenos Aires, creado por Juan Guillem, quien en el año 2015 egresa de la
          carrera de diseño Gráfico. Comienza a realizar trabajos de branding en forma independiente
          y suma sus habilidades para la ilustración y los conocimientos de fotografía y
          fotomontaje. Debido al crecimiento profesional y la escala de los proyectos encomendados,
          decide crear una identidad más amplia que abarcara todas estas disciplinas y a otros
          profesionales del diseño generando una estructura adaptable y competitiva. Los cambios
          tecnológicos y las distintas plataformas de comunicación son una constante que debe ser
          resuelta en forma global e integral. Nuestros clientes buscan soluciones únicas y propias.
          Nuestro trabajo es encontrar esas soluciones. Juntos ayudamos a las marcas a navegar para
          encontrar su voz.
        </p>
      </div>
    </section>
  );
};
