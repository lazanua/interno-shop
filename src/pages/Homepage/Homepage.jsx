import { useEffect } from "react";
import { motion } from "framer-motion";
import PagesItem from "../../components/PagesItem/PagesItem";
import FollowProject from "../../components/FollowProject/FollowProject";
import Article from "../../components/Article/Article";

import "./index.scss";

import img from "./../../img/estimate/01.jpg";
import call from "./../../img/estimate/icon-call.svg";
import person1 from "./../../img/people/01.jpg";
import person2 from "./../../img/people/02.jpg";
import person3 from "./../../img/people/03.jpg";

import project1 from "./../../img/follow/01.jpg";
import project2 from "./../../img/follow/02.jpg";
import project3 from "./../../img/follow/03.jpg";
import project4 from "./../../img/follow/04.jpg";
import article1 from "./../../img/articles/01.jpg";
import article2 from "./../../img/articles/02.jpg";
import article3 from "./../../img/articles/03.jpg";
import { Link } from "react-router-dom";
import JoinContainer from "../../components/JoinContainer/JoinContainer";
import Partners from "../../components/Partners/Partners";
import Statistics from "../../components/Statistics/Statisctics";

import {
  animationsRight,
  animationsTop,
  animationsLeft,
} from "../../data/animations";
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.25 },
  }),
};

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="home__main flex items-center justify-start h-screen bg-cover bg-no-repeat bg-center">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="home__wrapper"
          >
            <motion.h1
              className="home__title title text-[85px] lh-[1.25] tracking-normal"
              custom={1}
              variants={textAnimation}
            >
              Let Your Home <br />
              Be Unique
            </motion.h1>
            <div className="home__text text">
              <motion.p custom={2} variants={textAnimation}>
                There are many variations of the passages of lorem Ipsum
                fromavailable, majority.
              </motion.p>
            </div>
            <motion.button
              custom={2.5}
              variants={textAnimation}
              className="home__button button flex max-w-[222px]"
            >
              <div className="home__button-text --after-arow">Get Started</div>
            </motion.button>
          </motion.div>
        </div>
      </section>
      <section className="home__pages my-[200px] md:my-[150px] sm:my-[100px]">
        <div className="container">
          <div className="home__pages flex flex-col lg:flex-row  gap-[42px] items-center sm:gap-[25px]">
            <PagesItem
              title="Project Plan"
              text="There are many variations of the passages of lorem Ipsum from 
available, majority."
            />
            <PagesItem
              custom={0.5}
              title="Interior Work"
              text="There are many variations of the passages of lorem Ipsum from 
available, majority."
            />
            <PagesItem
              custom={1}
              title="Realization"
              text="There are many variations of the passages of lorem Ipsum from 
available, majority."
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <motion.div
            className="home__row flex mb-[200px] gap-[75px] lg:flex-row md:flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="home__content flex flex-col
              lg:items-start
              lg:text-left
              md:items-center md:text-center
              lg:max-w-[472px]
              md:max-w-[86%]"
              variants={textAnimation}
              custom={1}
            >
              <h2 className="home__subtitle title mb-[33px]">
                We Create The Art Of Stylish Living Stylishly
              </h2>
              <div className="home__text text mb-[45px]">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the of readable content of a page when lookings at its
                  layouts the points of using that it has a more-or-less normal.
                </p>
              </div>
              <div className="flex flex-row lg:flex-col items-center gap-x-[60px] justify-center">
                <div className="home__number gap-[15px] flex">
                  <div className="home__icon estimate__icon">
                    <a href="">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.0012 26.0749C30.7796 24.8442 27.8211 23.0482 26.3857 22.3243C24.5164 21.3828 24.3625 21.3059 22.8933 22.3974C21.9133 23.1258 21.2617 23.7766 20.1148 23.532C18.9678 23.2874 16.4754 21.9082 14.2931 19.7329C12.1107 17.5576 10.6514 14.9931 10.4061 13.8501C10.1607 12.7071 10.8222 12.0632 11.5438 11.081C12.5607 9.69642 12.4838 9.46566 11.6145 7.59651C10.9368 6.14273 9.08833 3.21208 7.85291 1.99675C6.53134 0.691421 6.53134 0.92218 5.67979 1.27601C4.98652 1.56768 4.32141 1.92222 3.69281 2.3352C2.46201 3.15285 1.77892 3.83206 1.30122 4.85278C0.823513 5.87351 0.608893 8.26648 3.07588 12.7478C5.54286 17.2292 7.27367 19.5206 10.8561 23.0928C14.4385 26.6649 17.1931 28.5856 21.2202 30.844C26.2018 33.6339 28.1126 33.09 29.1365 32.6131C30.1604 32.1362 30.8427 31.4593 31.662 30.2286C32.076 29.6011 32.4314 28.9368 32.7235 28.2441C33.0781 27.3957 33.3089 27.3957 32.0012 26.0749Z"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="home__numbers text-[24px]">
                    <span
                      className="text"
                      style={{ fontWeight: "700", fontSize: "24px" }}
                    >
                      012345678
                    </span>
                    <br />
                    <span className="text">Call Us Anytime</span>
                  </div>
                </div>
                <button
                  className="home__button mt-[47px] w-[240px] button "
                  onClick={() => (window.location.href = "/pricing")}
                >
                  <div className="--after-arow">Get Free Estimate</div>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="home__img hidden lg:block"
              variants={animationsRight}
              custom={2}
            >
              <img src={img} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <motion.section
        className="home__peoples"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="home__content rounded-[70px] flex flex-col bg-light py-[88px] px-[25px] justify-center">
            <motion.h2
              className="home__title title  mb-[38px] mx-auto max-w-[550px] text-center"
              variants={textAnimation}
              custom={1}
            >
              What the People Thinks About Us
            </motion.h2>
            <div className="home__row flex flex-col lg:flex-row gap-[20px]">
              <motion.div
                className="home__item bg-white flex flex-col items-center rounded-[35px] px-[37px] pt-[53px]"
                variants={animationsTop}
                custom={2}
              >
                <div className="home__people flex gap-[23px] mb-[25px]">
                  <div className="home__avatar">
                    <img className="rounded-full" src={person1} alt="" />
                  </div>
                  <div className="home__info">
                    <div className="home__name text">Nattasha Mith</div>
                    <div className="home__city text">Sydney, USA</div>
                  </div>
                </div>
                <div className="home__text text">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </div>
              </motion.div>
              <motion.div
                className="home__item bg-white h-[340px] flex flex-col items-center rounded-[35px] px-[37px] pt-[53px]"
                variants={animationsTop}
                custom={3}
              >
                <div className="home__people flex gap-[23px] mb-[25px]">
                  <div className="home__avatar">
                    <img className="rounded-full" src={person2} alt="" />
                  </div>
                  <div className="home__info">
                    <div className="home__name text">Raymond Galario</div>
                    <div className="home__city text">Sydney, Australia</div>
                  </div>
                </div>
                <div className="home__text text">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </div>
              </motion.div>
              <motion.div
                className="home__item bg-white h-[340px] flex flex-col items-center rounded-[35px] px-[37px] pt-[53px]"
                variants={animationsTop}
                custom={4}
              >
                <div className="home__people flex gap-[23px] mb-[25px]">
                  <div className="home__avatar ">
                    <img className="rounded-full" src={person3} alt="" />
                  </div>
                  <div className="home__info">
                    <div className="home__name text">Benny Roll</div>
                    <div className="home__city text">Sydney, New York</div>
                  </div>
                </div>
                <div className="home__text text">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <Partners />

      <section className="home__follow mb-[200px]">
        <div className="container">
          <motion.div
            className="home__wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="home__info"
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2
                className="home__title title text-center mb-[8px]"
                variants={textAnimation}
              >
                Follow Our Projects
              </motion.h2>
              <div className="home__text text text-center mb-[23px]">
                <motion.p variants={textAnimation} custom={1}>
                  It is a long established fact that a reader will be distracted
                  by the of readable content of page lookings at its layouts
                  points.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="home__projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FollowProject
                name="Modern Kitchan"
                category="Decor / Artchitecture"
                img={project1}
                animation="left"
                custom={2}
              />
              <FollowProject
                name="Modern Kitchan"
                category="Decor / Artchitecture"
                img={project2}
                animation="right"
                custom={2}
              />
              <FollowProject
                name="Modern Kitchan"
                category="Decor / Artchitecture"
                img={project3}
                animation="left"
                custom={3}
              />
              <FollowProject
                name="Modern Kitchan"
                category="Decor / Artchitecture"
                img={project4}
                animation="right"
                custom={3}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section
        className="
statistics"
      >
        <div className="container">
          <Statistics />
        </div>
      </section>
      <section className="articles">
        <div className="container">
          <motion.div
            className="articles__wpapper flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="articles__title title"
              variants={animationsLeft}
              custom={1}
            >
              Articles & News
            </motion.h2>
            <motion.div
              className="articles__text text"
              variants={animationsLeft}
              custom={2}
            >
              <p>
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using.
              </p>
            </motion.div>
            <div className="articles__articles flex items-center justify-center flex-wrap xl:flex-nowrap">
              <Article
                title="Let’s Get Solution For Building Construction Work"
                category="Kitchan Design"
                date="26 December,2022"
                img={article1}
                animation={animationsLeft}
                custom={1}
              />
              <Article
                img={article2}
                category="Living Design"
                title="Low Cost Latest Invented Interior Designing
Ideas."
                date="22 December,2022 "
                animation={animationsLeft}
                custom={2}
              />
              <Article
                img={article3}
                category="Interior Design"
                title="Best For Any Office & Business Interior 
Solution"
                date="25 December,2022 "
                animation={animationsRight}
                custom={3}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <JoinContainer />
    </main>
  );
};

export default Homepage;
