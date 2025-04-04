import { useEffect } from "react";
import Partners from "../../components/Partners/Partners";
import Statistics from "../../components/Statistics/Statisctics";
import Title from "../../components/Title/Title";
import VideoModal from "../../components/VideoModal/VideoModal";
import bg from "../../img/pages/services-single/bg.jpg";
import { motion } from "framer-motion";
import {
  animationsLeft,
  animationsRight,
  animationsTop,
} from "../../data/animations";
const ServicesSingle = () => {
  const benefits = [
    "We provide high quality design services",
    "Project on time and Latest Design",
    "Scientific Skills For getting a better result",
    "Renovations Benefit of Service",
    "We are confident about our projects",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="services-single">
      <Title img={bg} title="Service Single" subtitle="Service Single" />
      <div className="container">
        <motion.div
          className="services-single__row flex gap-[97px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="services-single__title title"
            variants={animationsLeft}
            custom={0.5}
          >
            We set the trends of modern living Services.
          </motion.h2>
          <div className="services-single__text text max-w-[655px]">
            <motion.p
              className="light-text"
              variants={animationsRight}
              custom={1.5}
            >
              It is a long established fact that a reader will be distracted by
              the of readable content of a page
            </motion.p>
            <br />
            <motion.p variants={animationsRight} custom={2}>
              when lookings at its layouts the points spriof using that it has a
              more less normal.A wonderful serenity has taken pgossession of my
              entire soul, like thesce sweet morndsings of sphring which I enjoy
              with my forwhole heart. I am alone, and feel the charm of
              excgistence in this spot, which was created for the bliss of souls
              like mine.
            </motion.p>
            <br />
            <motion.p variants={animationsRight} custom={2.5}>
              when lookings at its layouts the points spriof using that it has a
              more less normal.A wonderful serenity has taken pgossession of my
              entire soul, like thesce sweet morndsings of sphring which I enjoy
              with my forwhole heart. I am alone, and feel the charm of
              excgistence in this spot, which was created for the bliss of souls
              like mine.
            </motion.p>
          </div>
        </motion.div>
        <Partners />
        <div className="services-single__video-wrapper relative">
          <VideoModal />
        </div>
        <motion.div
          className="services-single__row flex justify-around mt-[150px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="services-single__item">
            <motion.h3
              className="services-single__subtitle title mb-[23px]"
              variants={animationsTop}
              custom={0.5}
            >
              Use of Interior
            </motion.h3>
            <div className="services-single__text text leading-[2.7]">
              {benefits.map((benefit, index) => (
                <motion.p
                  className="--numbered"
                  data-number={index + 1}
                  variants={animationsTop}
                  custom={0.5 + 0.25 * index}
                >
                  {benefit}
                </motion.p>
              ))}
            </div>
          </div>
          <div className="services-single__item">
            <motion.h3
              className="services-single__subtitle title mb-[23px]"
              variants={animationsTop}
              custom={0.5}
            >
              Make An Art
            </motion.h3>
            <div className="services-single__text text leading-[2.7]">
              {benefits.map((benefit, index) => (
                <motion.p
                  className="--numbered"
                  data-number={index + 1}
                  variants={animationsTop}
                  custom={0.5 + 0.25 * index}
                >
                  {benefit}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="services-single__row flex justify-between items-center mt-[150px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            className="max-w-[600px] rounded-[70px]"
            src="https://servicekontroll.se/wp-content/uploads/2024/02/X5BWooeO4Cw-728x496.jpeg"
            alt=""
            variants={animationsLeft}
            custom={0.5}
          />
          <motion.div
            className="services-single__content max-w-[518px]"
            variants={animationsRight}
            custom={0.5}
          >
            <h2 className="services-single__subtitle title mb-[11px]">
              We love design.That's how we got here.
            </h2>
            <div className="services-single__text text mb-[32px]">
              <p>
                It is a long established fact that a reader will be distracted
                by the of readable content .
              </p>
            </div>
            <button
              className="services-single__button button"
              onClick={() => (window.location.href = "/project")}
            >
              <span className="--after-arow">Our Portfolio</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-light my-[200px]">
        <div className="container">
          <Statistics />
        </div>
      </div>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/R_9-JElwV2A"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe> */}
    </section>
  );
};

export default ServicesSingle;
