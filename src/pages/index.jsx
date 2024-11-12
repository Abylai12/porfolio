import About from "@/components/About/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience/experience";
import Intro from "@/components/intro/intro";
import Skill from "@/components/skill/skill";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skill />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
