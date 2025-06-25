import { motion } from "framer-motion";
import { animationsTop } from "../../data/animations";
import "../../pages/Homepage/index.scss";
const Review = ({ img, name, city, text, custom }) => {
  return (
    <div className="w-[370px] sm:w-[430px] lg:w-[310px] xl:w-[370px]">
      <motion.div
        className="home__item h-[339px] bg-white flex flex-col items-center rounded-[35px] lg:rounded-[28px]
        xl:rounded-[35px] px-[37px] lg:px-[32px] xl:px-[37px] pt-[53px]"
        variants={animationsTop}
        custom={custom}
      >
        <div className="home__people flex gap-[23px] mb-[25px]">
          <div className="home__avatar">
            <img className="rounded-full" src={img} alt="" />
          </div>
          <div className="home__info">
            <div className="home__name text-[22px]  lg:text-[20px] xl:text-[22px]">
              {name}
            </div>
            <div className="home__city font-[#292f36] text-[18px] xl:text-[22px]">
              {city}
            </div>
          </div>
        </div>
        <div className="home__text text-[18px] text-[#4d5053] xl:text-[22px]">
          {text}
        </div>
      </motion.div>
    </div>
  );
};

export default Review;
