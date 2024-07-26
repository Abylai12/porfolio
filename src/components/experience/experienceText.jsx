const ExperienceCard = ({ companyLogo, position, date, jobRoles }) => {
  return (
    <section className="p-8 bg-white dark:bg-[#1F2937] rounded-xl mb-12">
      <div className="flex  max-[640px]:flex-col  justify-between">
        <div className="flex-1">
          <img src={companyLogo} alt="" />
        </div>
        <div className="flex-1 max-[640px]:order-last">
          <h1 className="font-bold text-gray-900 dark:text-[#F9FAFB] text-xl">
            {position}
          </h1>
          <ul className="mt-4 list-disc text-base text-gray-600 dark:text-[#D1D5DB] font-normal">
            {jobRoles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <span className="text-gray-700 dark:text-[#D1D5DB] font-normal text-base">
            {date}
          </span>
        </div>
      </div>
    </section>
  );
};
export default ExperienceCard;
