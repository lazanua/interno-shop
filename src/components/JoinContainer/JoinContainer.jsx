import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationsLeft } from "../../data/animations";
const JoinContainer = () => {
  return (
    <motion.div
      className="join"
      initial="hidden"
      whileInView="visible"
      variants={animationsLeft}
      viewport={{ once: true }}
    >
      <section className="join my-[50px] md:my-[70px] xl:my-[100px] lg:my-[200px]">
        <div className="container contents sm:block">
          <div className="join__wrapper bg-dark text-center rounded-none sm:rounded-[70px] py-[40px] md:py-[60px] xl:py-[80px] flex flex-col items-center justify-center text-white">
            <h2 className="join__title title mb-[11px] text-white">
              Wanna join the interno?
            </h2>
            <div className="join__text text mb-[24px] md:mb-[32px] text-white">
              <p>It is a long established fact will be distracted.</p>
            </div>
            <Link to="/contact" className="join__button button button--light">
              <div className="--after-arow">Contact With Us</div>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default JoinContainer;

//   .contact__wrapper {
//     text-align: center;
//     border-radius: 70px;
//     padding: 80px 0;
//     background-color: var(--dark-color);
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     .title,
//     .text {
//       color: white;
//     }
//   }
//   .contact__title {
//     margin-bottom: 11px;
//   }
//   .contact__text {
//     margin-bottom: 32px;
//   }
