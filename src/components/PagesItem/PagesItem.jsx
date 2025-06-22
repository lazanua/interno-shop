import "./index.scss";
import { motion } from "framer-motion";
const itemAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.1 },
  }),
};

const PagesItem = ({ title, text, custom }) => {
  return (
    <motion.div
      onClick={() => (window.location.href = "/servicessingle")}
      className="pages__item text-center rounded-[30px]
      xl:w-[398px] md:w-auto w-full  lg:py-[82px] py-[12px] px-[20px] md:py-[25px]"
      initial="hidden"
      variants={itemAnimation}
      whileInView="visible"
      custom={custom}
      viewport={{ once: true }}
    >
      <h4 className="mb-[20px] pages__title text-[20px] xl:text-[25px]">
        {title}
      </h4>
      <div className="mb-[24px] md:mb-[40px] xl:mb-[52px] text w-full text-left md:text-left">
        {text}
      </div>
      <a className="pages__link link ">
        <span className="--after-arow text-[14px] md:text-[18px]">
          Read More
        </span>
      </a>
    </motion.div>
  );
};

export default PagesItem;
