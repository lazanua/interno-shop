import { motion } from "framer-motion";
const ServicesItem = ({
  textAnimation,
  img,
  title,
  text,
  isImgLeft,
  index,
  icon,
}) => {
  return (
    <motion.div
      className={`services__item flex flex-col ${
        isImgLeft ? "sm:flex-row" : "sm:flex-row-reverse"
      } gap-[51px] items-center`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="services__img  hidden sm:block sm:w-full md:w-[460px]"
        variants={textAnimation}
        custom={1}
      >
        <img src={img} alt="" />
      </motion.div>
      <motion.div
        className="services__content w-full md:max-w-[456px]"
        data-number={index + 1}
        variants={textAnimation}
        custom={2}
      >
        <div className="services__icon">
          <img src={icon} alt="" />
        </div>
        <div className="services__subtitle subtitle w-full sm:max-w-[60%] md:max-w-fit text-[35px] mb-[10px] mt-[15px] sm:mt-[40px] md:mt-[63px]">
          {title}
        </div>
        <div className="services__text  max-w-[320px] md:max-w-fit">
          <p>{text}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesItem;
