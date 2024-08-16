import { About } from "@/components/sections/About";
import { Footer, Blog, Projects, Hero } from "../components/sections";
import { Premios } from "@/components/sections/About/Premios";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Premios />
      <Blog />
      <Footer />
    </main>
  );
}
