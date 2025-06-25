import { useEffect } from "react";
import { easeIn, motion } from "framer-motion";
import Title from "../../components/Title/Title";
import bg from "../../img/pages/services/bg.jpg";
import PagesItem from "../../components/PagesItem/PagesItem";
import img1 from "../../img/pages/services/01.jpg";
import img2 from "../../img/pages/services/02.jpg";
import img3 from "../../img/pages/services/03.jpg";
import img4 from "../../img/pages/services/04.jpg";
import icon1 from "../../img/pages/services/icon1.svg";
import icon2 from "../../img/pages/services/icon2.svg";
import icon3 from "../../img/pages/services/icon3.svg";
import icon4 from "../../img/pages/services/icon4.svg";

import "./index.scss";
import JoinContainer from "../../components/JoinContainer/JoinContainer";
import { textAnimation } from "../../data/animations";
import ServicesItem from "../../components/ServicesItem/ServicesItem";
const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const icons = [icon1, icon2, icon3, icon4];
  const servicesItems = [
    {
      img: img1,
      title: "Concept & Details",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
      isImgLeft: true,
    },
    {
      img: img2,
      title: "Idea for Work",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
      isImgLeft: false,
    },
    {
      img: img3,
      title: "Design",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
      isImgLeft: true,
    },
    {
      img: img4,
      title: "Perfection",
      text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
      isImgLeft: false,
    },
  ];
  const servicesLinkes = [
    "Project Plan",
    "Interior Work",
    "Retail Design",
    "2d/3d Art Work",
    "Interior Work",
    "Decoration Work",
  ];
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
  return (
    <div className="services">
      <Title title="Services" img={bg} subtitle="Services" />
      <div className="container">
        <div className="services__grid mx-auto grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 md:grid-rows-3 grid-rows-6 lg:grid-rows-2">
          {servicesLinkes.map((link, index) => (
            <PagesItem
              title={link}
              text="There are many variations of the passages of lorem Ipsum from 
available, majority."
              custom={index * 0.5}
            />
          ))}
        </div>
      </div>
      <div className="container contents xl:block">
        <div
          className="services__wrapper text bg-light rounded-none
        xl:rounded-[70px] py-[40px] md:py-[100px] xl:py-[160px]
        px-[15px] md:px-[60px] xl:px-[116px] flex flex-col gap-[70px]
        items-center justify-center  mt-[50px] md:mt-[64px] xl:mt-[150px] lg:mt-[200px]"
        >
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="services__title title text-center"
              variants={textAnimation}
              custom={1}
            >
              How We Work
            </motion.h2>
            <div className="services__text w-full mb-[16px] md:mb-[30px] text-center sm:max-w-[802px]">
              <motion.p variants={textAnimation} custom={1}>
                It is a long established fact will be distracted.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </motion.p>
            </div>
          </motion.div>

          {servicesItems.map((item, index) => (
            <ServicesItem
              textAnimation={textAnimation}
              img={item.img}
              title={item.title}
              text={item.text}
              isImgLeft={item.isImgLeft}
              index={index}
              icon={icons[index]}
            />
          ))}
        </div>
      </div>
      <div className="container contents sm:block">
        <JoinContainer />
      </div>
    </div>
  );
};

export default ServicesPage;
