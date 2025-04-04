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
      lg:w-[398px] md:w-[720px] sm:w-[500px] lg:py-[82px] px-[20px] md:py-[25px]"
      initial="hidden"
      variants={itemAnimation}
      whileInView="visible"
      custom={custom}
      viewport={{ once: true }}
    >
      <h4 className="pages__title">{title}</h4>
      <div className="pages__text text md:text-left">{text}</div>
      <a className="pages__link link">
        <span className="--after-arow">Read More</span>
      </a>
    </motion.div>
  );
};

export default PagesItem;
