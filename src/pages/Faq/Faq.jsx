import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Title from "../../components/Title/Title";
import bg from "../../img/pages/faq/bg.jpg";
import img1 from "../../img/pages/faq/01.jpg";
import img2 from "../../img/pages/faq/02.jpg";
import Question from "../../components/Question/Question";
import { animations } from "../../data/animations";
import { animationsTop } from "../../data/animations";
const questions = [
  [
    "What is the Hipcouch Interior Design Service?",
    "So, how exactly does this work?",
    "What cities do you currently operate in?",
    "Hipcouch Interior Design Service?",
    "What kind of interior designers do you have?",
  ],
  [
    "How long does it take?",
    "Can I use my existing furnishings?",
    "I put into redesigning my interior?",
    "What do your services cost?",
    "Do you offer free consultations?",
  ],
];
const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(-1);
  const [activeQuestion2, setActiveQuestion2] = useState(-1);
  const onClickQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(-1);
    } else {
      setActiveQuestion(id);
    }
  };
  const onClickQuestion2 = (id) => {
    if (activeQuestion2 === id) {
      setActiveQuestion2(-1);
    } else {
      setActiveQuestion2(id);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="faq">
      <Title title="Faq’s" img={bg} subtitle="faq" />
      <div className="container">
        <motion.div
          className="faq__wrapper mb-[150px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="faq__title title mb-[50px] text-center"
            variants={animations}
            custom={1}
          >
            Every Question Answered
          </motion.h2>
          <div className="faq__row flex flex-col justify-center lg:flex-row lg:justify-between gap-[20px] xl:gap-[60px] items-center mx-auto">
            <motion.div
              className="faq__question-block mt-[50px]"
              variants={animationsTop}
              custom={1}
            >
              {questions[0].map((title, index) => (
                <div className="" key={title}>
                  <Question
                    title={title}
                    id={index}
                    onClickQuestion={onClickQuestion}
                    isActive={activeQuestion === index ? true : false}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="faq__img lg:w-[80%] lg:h-[80%] md:w-[80%] md:h-[80%]"
              variants={animationsTop}
              custom={2}
            >
              <img className="rounded-[40px]" src={img1} alt="" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="faq__wrapper mb-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className="faq__title title mb-[50px] text-center"
            variants={animations}
            custom={1}
          >
            Project related questions
          </h2>
          <div className="faq__row flex flex-col justify-center lg:flex-row xl:justify-between gap-[20px] xl:gap-[60px] items-center mx-auto">
            <motion.div
              className="faq__img"
              variants={animationsTop}
              custom={1}
            >
              <img className="rounded-[40px]" src={img2} alt="" />
            </motion.div>
            <motion.div
              className="faq__question-block mt-[50px]"
              variants={animationsTop}
              custom={2}
            >
              {questions[1].map((title, index) => (
                <div className="" key={title}>
                  <Question
                    title={title}
                    id={index}
                    onClickQuestion={onClickQuestion2}
                    isActive={activeQuestion2 === index ? true : false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
