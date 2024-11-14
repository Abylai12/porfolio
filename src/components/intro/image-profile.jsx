// import { motion } from "framer-motion";
const ImageProfile = ({ imgUrl }) => {
  return (
    <div animate={{ x: [0, 100, 0] }}>
      <div className="px-8">
        <img
          className="w-[280px] h-80 shadow-[40px_40px_#E5E7EB] dark:shadow-[40px_40px_#374151] border-8 dark:border-black border-white "
          src={imgUrl}
          alt="img"
        />
      </div>
    </div>
  );
};

export default ImageProfile;
