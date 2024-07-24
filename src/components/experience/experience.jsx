import Tags from "../tags/tags";
import ExperienceCard from "./experienceText";
const ExperiencesContent = [
  {
    Logo: "./images/pic.png",
    position: "Junior",
    date: "2014.08-Present",
    jobRoles: ["devops", "fullstack"],
  },
  {
    Logo: "./images/pic.png",
    position: "Junior",
    date: "2014.08-Present",
    jobRoles: ["devops", "fullstack"],
  },
  {
    Logo: "./images/pic.png",
    position: "Junior",
    date: "2014.08-Present",
    jobRoles: ["devops", "fullstack"],
  },
];

const Experience = () => {
  return (
    <section>
      <Tags textTag="Experience" />
      <div>
        <span className="text-gray-600 text-xl">
          Here is a quick summary of my most recent experiences:
        </span>
      </div>
      <div>
        {ExperiencesContent.map(({ logo, position, date, jobRoles }) => (
          <ExperienceCard
            companyLogo={logo}
            position={position}
            date={date}
            jobRoles={jobRoles}
          />
        ))}
      </div>
    </section>
  );
};
export default Experience;
