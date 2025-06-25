import "./index.scss";
import {
  animationsRight,
  animationsLeft,
  animationsTop,
} from "../../data/animations";
import { motion } from "framer-motion";
const Article = ({ img, category, title, date, animation, custom }) => {
  const clickOnArticle = () => {
    window.location.href = "/page";
  };
  return (
    <motion.div
      className="article rounded-[40px] md:rounded-[62px] w-fit h-[430px]
      md:h-[430px] lg:h-[490px] xl:h-[521px] p-[12px] md:p-[16px] xl:p-[21px]"
      onClick={clickOnArticle}
      variants={animation}
      custom={custom}
    >
      <div className="article__wrapper ">
        <div className="article__img h-auto w-full xs:w-[280px] xl:w-[340px] xl:h-[289px]">
          <img src={img} alt="" />
        </div>
        <div className="article__category py-[8px] px-[10px] left-[12px] bottom-[12px] md:left-[20px] md:bottom-[20px]">
          {category}
        </div>
      </div>
      <div
        className="article__title mt-[21px] max-w-[280px] xl:max-w-[340px] xl:text-[25px] lg:text-[22px] md:text-[20px] text-[18px] "
        style={{ fontFamily: "var(--title)" }}
      >
        {title}
      </div>
      <div
        className="article__row  flex gap-y-[20px]
      justify-between left-0 bottom-[24px]
      md:bottom-[34px] px-[12px] items-start md:items-center xl:px-[21px] md:px-[16px] w-full xl:w-[340px]"
      >
        <div className="article__date" style={{ fontFamily: "var(--text)" }}>
          {date}
        </div>
        <div className="article__button w-[36px] h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px]">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77199 14.9529L7.71484 8.26717L1.77199 1.58145"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
