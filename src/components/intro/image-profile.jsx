const ImageProfile = ({ imgUrl }) => {
  return (
    <div>
      <img
        className="w-[280px] h-80 shadow-[40px_40px_#E5E7EB] border-8 border-white "
        src={imgUrl}
        alt="img"
      />
    </div>
  );
};

export default ImageProfile;
