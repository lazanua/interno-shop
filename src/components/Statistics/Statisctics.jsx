import "./index.scss";
import { animationsTop } from "../../data/animations";
import { motion } from "framer-motion";
const Statistics = () => {
  return (
    <motion.div
      className="statiscics bg-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="statistics__row lg:flex">
        <div className="statistics__item">
          <motion.div
            className="statistics__number"
            variants={animationsTop}
            custom={1}
          >
            12
          </motion.div>
          <motion.div
            className="statistics__info text"
            variants={animationsTop}
            custom={2}
          >
            Years Of Experiance
          </motion.div>
        </div>
        <div className="statistics__line"></div>
        <div className="statistics__item">
          <motion.div
            className="statistics__number"
            variants={animationsTop}
            custom={1}
          >
            85
          </motion.div>
          <motion.div
            className="statistics__info text"
            variants={animationsTop}
            custom={2}
          >
            Success Project
          </motion.div>
        </div>
        <div className="statistics__line"></div>
        <div className="statistics__item">
          <motion.div
            className="statistics__number"
            variants={animationsTop}
            custom={1}
          >
            15
          </motion.div>
          <motion.div
            className="statistics__info text"
            variants={animationsTop}
            custom={2}
          >
            Active Project
          </motion.div>
        </div>
        <div className="statistics__line"></div>
        <div className="statistics__item">
          <motion.div
            className="statistics__number"
            variants={animationsTop}
            custom={1}
          >
            95
          </motion.div>
          <motion.div
            className="statistics__info text"
            variants={animationsTop}
            custom={2}
          >
            Happy Customers
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
