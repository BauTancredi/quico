import { About } from "@/components/sections/About";
import { Footer, Blog, Projects, Hero } from "../components/sections";

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
