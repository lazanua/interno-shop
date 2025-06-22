import "./index.scss";
import { animationsTop } from "../../data/animations";
import { motion } from "framer-motion";
const Statistics = () => {
  const statiscticNumberStyles =
    "text-[50px] sm:text-[78px] md:text-[65px] xl:text-[85px]";
  return (
    <motion.div
      className="statiscics bg-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="statistics__row py-[10%] xl:py-[151px] xl:px-[59px] gap-y-[10px] grid grid-cols-3 md:flex">
        <div className="statistics__item">
          <motion.div
            className={`statistics__number ${statiscticNumberStyles}`}
            variants={animationsTop}
            custom={1}
          >
            12
          </motion.div>
          <motion.div
            className="statistics__info text w-full"
            variants={animationsTop}
            custom={2}
          >
            Years Of Experiance
          </motion.div>
        </div>
        <div className="statistics__line block mx-auto md:mx-0"></div>
        <div className="statistics__item">
          <motion.div
            className={`statistics__number ${statiscticNumberStyles}`}
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
        <div className="statistics__line hidden md:block"></div>
        <div className="statistics__item">
          <motion.div
            className={`statistics__number ${statiscticNumberStyles}`}
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
        <div className="statistics__line block mx-auto md:mx-0"></div>
        <div className="statistics__item">
          <motion.div
            className={`statistics__number ${statiscticNumberStyles}`}
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
