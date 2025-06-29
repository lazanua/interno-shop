import { useState, useEffect } from "react";
import "./index.scss";
import Title from "../../components/Title/Title";
import SendForm from "../../components/SendForm/SendForm";
import bg from "./../../img/about/bg.jpg";
import do1 from "./../../img/do/01.jpg";
import do2 from "./../../img/do/02.jpg";
import { motion } from "framer-motion";
import {
  animationsLeft,
  animationsRight,
  animationsTop,
} from "../../data/animations";
import AboutForm from "../../components/AboutForm/AboutForm";
const About = () => {
  const inputs = [
    { name: "Name", type: "text" },
    { name: "Email", type: "email" },
    { name: "Hello Iam Intrested in..", type: "text" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about">
      <Title title="About Us" img={bg} subtitle="About Us" />
      <section className="quote justify-center items-center flex-col">
        <div className="container contents sm:block">
          <motion.div
            className="quote__content px-[15px] py-[24px] sm:px-[40px]  sm:py-[67px] md:px-[62px] mb-[40px] sm:mb-[140px] md:mb-[200px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationsTop}
            custom={1}
          >
            <div className="quote__symbol mb-[-16px] md:mb-[27px]">“</div>
            <div className="quote__quote w-[90%] sm:w-auto sm:text-[24px] text-[20px] md:text-[35px] mb-[34px]">
              <p>
                I like an interior that defies labeling. I don't really want
                someone to walk into a room and know that I did it
              </p>
            </div>
            <div className="quote__author text-[20px] md:text-[25px]">
              -BUNNY WILLIAMS
            </div>
          </motion.div>
        </div>
      </section>
      <section className="do">
        <div className="container">
          <div
            className="do__row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="do__item flex-col md:flex-row mb-[40px] md:mb-[80px] xl:mb-[150px]">
              <div className="do__content w-full md:w-[50%] xl:max-w-[670px] ">
                <motion.div
                  className="do__title title text-center md:text-start"
                  variants={animationsRight}
                  custom={1}
                >
                  What We Do
                </motion.div>
                <motion.div
                  className="do__text text"
                  variants={animationsRight}
                  custom={2}
                >
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page when
                    lookings at its layouts the points of using that it has a
                    more-or-less normal.
                  </p>
                </motion.div>
                <motion.div
                  className="do__button mx-auto md:mx-0 button"
                  variants={animationsRight}
                  custom={3}
                >
                  <a href="" className="--after-arow">
                    Our Concept
                  </a>
                </motion.div>
              </div>
              <motion.div
                className="do__img w-[90%] md:w-[50%] xl:w-auto"
                variants={animationsRight}
                custom={1}
              >
                <img src={do1} alt="" />
              </motion.div>
            </div>
            <div className="do__item flex-col-reverse md:flex-row mb-[60px] md:mb-[80px] xl:mb-[150px]">
              <div className="do__img w-[90%] md:w-[50%] xl:w-auto">
                <img src={do2} alt="" />
              </div>
              <div className="do__content w-full md:w-[50%] xl:max-w-[670px]">
                <div className="do__title title">The End Result</div>
                <div className="do__text text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page when
                    lookings at its layouts the points of using that it has a
                    more-or-less normal.
                  </p>
                </div>
                <div className="do__button button mx-auto md:mx-0 button">
                  <a href="" className="--after-arow">
                    Our Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form lg:pt-[213px] pb-[60px] md:pb-[90px] lg:pb-[135px]">
        <div className="container">
          <h2 className="form__title title text-center mb-[77px]">
            Creative project? Let's have <br />a productive talk.
          </h2>
          <div className="w-full">
            <AboutForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
