import Tags from "../tags/tags";
import WorkCard from "./workCard";
const proList = [
  {
    proImg: "/images/ubCap.png",
    proTitle: "UB cab",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: ["React", "Next.js"],
  },
  {
    proImg: "/images/mentor.png",
    proTitle: "UB cab",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: ["React", "Next.js"],
  },
  {
    proImg: "/images/Itoim.png",
    proTitle: "UB cab",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: ["React", "Next.js"],
  },
];
const Work = () => {
  return (
    <section>
      <div>
        <Tags textTag="Work" />
        <div className="flex justify-center">
          <span className="text-xl text-gray-600">
            Some of the noteworthy projects I have built:
          </span>
        </div>
      </div>
      <div>
        {proList.map(({ proImg, proTitle, proText, useApp }) => (
          <WorkCard
            proImg={proImg}
            proTitle={proTitle}
            proText={proText}
            useApp={useApp.map((app, idx) => (
              <Tags key={idx} textTag={app} />
            ))}
          />
        ))}
      </div>
    </section>
  );
};
export default Work;
