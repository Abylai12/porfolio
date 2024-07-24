const ExperienceCard = ({ companyLogo, position, date, jobRoles }) => {
  return (
    <section className="p-8 bg-white rounded-xl mb-12">
      <div className="flex justify-between">
        <div className="flex-1">
          <img src={companyLogo} alt="" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900 text-xl">{position}</h1>
          <ul className="mt-4 list-disc text-base text-gray-600 font-normal">
            {jobRoles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <span className="text-gray-700 font-normal text-base">{date}</span>
        </div>
      </div>
    </section>
  );
};
export default ExperienceCard;
