import { motion } from "framer-motion";
import { animationsTop } from "../../data/animations";
const PricingItem = ({ title, price, mostPopular, info }) => {
  return (
    <motion.div
      className="pricing__plan h-[722px] py-[64px] w-[300px] lg:w-[368px]  rounded-[33px]"
      variants={animationsTop}
      custom={0.5}
    >
      <h3 className="pricing__name subtitle mb-[38px]">{title}</h3>
      <div className={`pricing__price text ${mostPopular && "popular"}`}>
        $<span>{price}</span> <br />
        /month
      </div>
      <div
        className={`pricing__line mt-[37px] mb-[28px] ${
          mostPopular && "popular"
        }`}
      ></div>
      <div
        className="pricing__text text-[18px] lg:text-[20px] text-[var(--dark-color)] leading-[2.2] lg:leading-[2.5]"
        style={{ fontFamily: "var(--text)" }}
      >
        {info.map((text) => (
          <p>{text}</p>
        ))}
        {/* <p>General living space advices</p>
        <p>Rennovation advices</p>
        <p>Interior design advices</p>
        <p>Furniture reorganization</p>
        <p>Up to 5 hours meetings</p> */}
      </div>
      <div
        className={`pricing__button button w-fit mt-[20px] lg:mt-[28px] xl:w-[219px] ${
          mostPopular ? "" : "button--light"
        }`}
      >
        <span className="--after-arow ">Get Started</span>
      </div>
    </motion.div>
  );
};

export default PricingItem;
