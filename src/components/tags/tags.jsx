const Tags = ({ textTag }) => {
  return (
    <>
      <div className="flex justify-center">
        <span className="bg-gray-200 py-1 px-5 dark:bg-[#374151] dark:text-[#D1D5DB] text-gray-600 font-medium text-center rounded-xl ">
          {textTag}
        </span>
      </div>
    </>
  );
};
export default Tags;
