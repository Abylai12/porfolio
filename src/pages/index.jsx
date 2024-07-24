import About from "@/components/About/about";
import Experience from "@/components/experience/experience";
import Intro from "@/components/intro/intro";
import Skill from "@/components/skill/skill";
import Work from "@/components/work";
const app = ["next", "react"];
export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skill />
      <Experience />
      <Work />
      <div>
        {app.map((app) => (
          <li>{app}</li>
        ))}
      </div>
    </main>
  );
}
