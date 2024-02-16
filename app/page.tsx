import { About } from "@/components/sections/About";
import { Footer, Blog, Projects, Hero } from "../components/sections";

// [x] Pasarle a quico dimensión de la imagenes
// [x] Footer (Behance e Instagram)
// [X] Types
// [x] Font
// [] Probar proyecto con webp y dimensiones correctas
// [] Hero
// [] About
// [] Header en proyecto
// [] Mobile
// [] Meta tags
// [] Webhook
// [] Filtros

export default async function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Footer />
    </main>
  );
}
