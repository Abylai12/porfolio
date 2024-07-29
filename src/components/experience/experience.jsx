import Tags from "../tags/tags";
import ExperienceCard from "./experienceText";
const ExperiencesContent = [
  {
    logo: "./images/Group.png",
    position: "Sr.Frontend Developer",
    date: "2014.08-Present",
    jobRoles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "The job description should accurately reflect the duties and responsibilities of the position.",
      "When well-written, it produces a realistic picture of a job and answers the question",
      "“What does the person in this role actually do?”",
    ],
  },
  {
    logo: "./images/Group.png",
    position: "Team Lead",
    date: "2014.08-Present",
    jobRoles: [
      "A job description not only describes the position’s responsibilities,",
      "it sets the foundation for recruiting",
      "developing, and retaining talent and",
      "also sets the stage for optimum work performance by clarifying responsibilities,",
    ],
  },
  {
    logo: "./images/Group.png",
    position: "Full Stack Developer",
    date: "2014.08-Present",
    jobRoles: ["expected results, ", "and evaluation of performance"],
  },
];

const Experience = () => {
  return (
    <section className="px-4 py-16 sm:py-20 sm:px-24 dark:bg-[#111827] bg-gray-50 ">
      <div className="sm:px-8">
        <Tags textTag="Experience" />
        <div className="flex justify-center mt-4 mb-12 text-gray-600 text-xl font-normal">
          <span className="text-gray-600 text-center dark:text-[#D1D5DB] text-xl">
            Here is a quick summary of my most recent experiences:
          </span>
        </div>
        <div>
          {ExperiencesContent.map(({ logo, position, date, jobRoles }, idx) => (
            <ExperienceCard
              key={idx}
              companyLogo={logo}
              position={position}
              date={date}
              jobRoles={jobRoles}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
