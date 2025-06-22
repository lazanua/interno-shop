import partner1 from "./../../img/partners/01.svg";
import partner2 from "./../../img/partners/02.svg";
import partner3 from "./../../img/partners/03.svg";
import partner4 from "./../../img/partners/04.svg";
import partner5 from "./../../img/partners/05.svg";
import { motion } from "framer-motion";
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
  const partnersImages = [partner1, partner2, partner3, partner4, partner5];
  return (
    <section className="partners my-[40px] md:my-[60px] xl:my-[120px] lg:my-[150px]">
      <div className="container no-scrollbar overflow-auto">
        <motion.div
          className="partners__row flex w-[849px] md:w-auto gap-[40px] justify-center md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partnersImages.map((partner, index) => (
            <a className="partners__partner">
              <motion.img
                src={partner}
                alt=""
                custom={index + 1}
                variants={partnersAnimation}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
