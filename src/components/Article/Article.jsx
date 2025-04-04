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
      className="article"
      onClick={clickOnArticle}
      variants={animation}
      custom={custom}
    >
      <div className="article__wrapper">
        <div className="article__img">
          <img src={img} alt="" />
        </div>
        <div className="article__category">{category}</div>
      </div>
      <div className="article__title subtitle">{title}</div>
      <div className="article__row flex">
        <div className="article__date">{date}</div>
        <div className="article__button">
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
