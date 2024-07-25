import Tags from "../tags/tags";
import WorkCard from "./workCard";
const proList = [
  {
    proImg: "/images/ubCap.png",
    proTitle: "UB cab",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSql",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    proImg: "/images/mentor.png",
    proTitle: "Mentorhub",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSql",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    proImg: "/images/Itoim.png",
    proTitle: "Itoim",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSql",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];
const Work = () => {
  return (
    <section className="px-20 py-24">
      <div>
        <Tags textTag="Work" />
        <div className="flex justify-center">
          <span className="text-xl text-gray-600 mt-4 mb-12">
            Some of the noteworthy projects I have built:
          </span>
        </div>
      </div>
      <div>
        {proList.map(({ proImg, proTitle, proText, useApp }, idx) => (
          <WorkCard
            key={idx}
            index={idx}
            proImg={proImg}
            proTitle={proTitle}
            proText={proText}
            useApp={useApp.map((app, idx) => {
              console.log("app", app);
              return <Tags key={idx} textTag={app} />;
            })}
          />
        ))}
      </div>
    </section>
  );
};
export default Work;
