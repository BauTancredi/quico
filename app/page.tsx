import { Footer, Blog, Projects, Hero } from "../components/sections";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}
