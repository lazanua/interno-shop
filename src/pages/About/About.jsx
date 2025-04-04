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
        <div className="container">
          <motion.div
            className="quote__content mb-[200px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationsTop}
            custom={1}
          >
            <div className="quote__symbol mb-[27px]">“</div>
            <div className="quote__quote mb-[34px]">
              <p>
                I like an interior that defies labeling. I don't really want
                someone to walk into a room and know that I did it
              </p>
            </div>
            <div className="quote__author">-BUNNY WILLIAMS</div>
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
            <div className="do__item mb-[150px]">
              <div className="do__content max-w-[670px] ">
                <motion.div
                  className="do__title title"
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
                  className="do__button button"
                  variants={animationsRight}
                  custom={3}
                >
                  <a href="" className="--after-arow">
                    Our Concept
                  </a>
                </motion.div>
              </div>
              <motion.div
                className="do__img"
                variants={animationsRight}
                custom={1}
              >
                <img src={do1} alt="" />
              </motion.div>
            </div>
            <div className="do__item">
              <div className="do__img">
                <img src={do2} alt="" />
              </div>
              <div className="do__content max-w-[659px] ">
                <div className="do__title title">The End Result</div>
                <div className="do__text text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page when
                    lookings at its layouts the points of using that it has a
                    more-or-less normal.
                  </p>
                </div>
                <div className="do__button button">
                  <a href="" className="--after-arow">
                    Our Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form pt-[213px] pb-[135px]">
        <div className="container">
          <h2 className="form__title title text-center mb-[77px]">
            Creative project? Let's have <br />a productive talk.
          </h2>
          <SendForm
            hasCheckbox={false}
            inputsNames={inputs}
            buttonClasses="justify-center"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
