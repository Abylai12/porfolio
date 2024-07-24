const ExperienceCard = ({ companyLogo, position, date, jobRoles }) => {
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex-1">
          <img src={companyLogo} alt="" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900 text-xl">{position}</h1>
          <ul>
            {jobRoles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <span className="text-gray-700 font-normal text-base">{date}</span>
        </div>
      </div>
    </section>
  );
};
export default ExperienceCard;
