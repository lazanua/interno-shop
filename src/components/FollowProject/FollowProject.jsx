import { animationsLeft, animationsRight } from "../../data/animations";
import { motion } from "framer-motion";
import "./index.scss";
const FollowProject = ({ img, name, category, animation, custom }) => {
  return (
    <motion.div
      className="follow__project mx-auto w-[300px] xs:w-[330px] sm:w-auto max-w-[524px]"
      variants={animation === "left" ? animationsLeft : animationsRight}
      custom={custom}
    >
      <div className="follow__img">
        <img src={img} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="follow__content mt-[24px]">
          <div className="follow__info">
            <div className="follow__name subtitle">{name}</div>
            <div className="follow__category md:text-[20px] lg:text-[22px]">
              {category}
            </div>
          </div>
        </div>
        <div className="">
          <a className="bg-light h-[55px] w-[55px] xl:w-[70px] xl:h-[70px] flex items-center justify-center rounded-full">
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[26%]"
            >
              <path
                d="M1 19L9 10L1 1"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FollowProject;
