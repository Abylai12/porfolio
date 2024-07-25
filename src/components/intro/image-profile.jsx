const ImageProfile = ({ imgUrl }) => {
  return (
    <div className="px-8">
      <img
        className="w-[280px] h-80 shadow-[40px_40px_#E5E7EB] dark:shadow-[40px_40px_#374151] border-8 dark:border-black border-white "
        src={imgUrl}
        alt="img"
      />
    </div>
  );
};

export default ImageProfile;
