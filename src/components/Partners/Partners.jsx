import partner1 from "./../../img/partners/01.svg";
import partner2 from "./../../img/partners/02.svg";
import partner3 from "./../../img/partners/03.svg";
import partner4 from "./../../img/partners/04.svg";
import partner5 from "./../../img/partners/05.svg";
import { easeIn, motion } from "framer-motion";

const Partners = () => {
  const partnersAnimation = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.25 },
    }),
  };
  return (
    <section className="partners">
      <div className="container">
        <motion.div
          className="partners__row flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a className="partners__partner">
            <motion.img
              src={partner1}
              alt=""
              custom={1}
              variants={partnersAnimation}
            />
          </a>
          <a className="partners__partner">
            <motion.img
              src={partner2}
              alt=""
              custom={2}
              variants={partnersAnimation}
            />
          </a>
          <a className="partners__partner">
            <motion.img
              src={partner3}
              alt=""
              custom={2}
              variants={partnersAnimation}
            />
          </a>
          <a className="partners__partner">
            <motion.img
              src={partner4}
              alt=""
              custom={3}
              variants={partnersAnimation}
            />
          </a>
          <div className="flex items-center justify-center">
            <a className="partners__partner ">
              <motion.img
                src={partner5}
                alt=""
                custom={4}
                variants={partnersAnimation}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
