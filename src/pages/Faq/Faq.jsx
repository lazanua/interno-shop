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
  const [activeQuestions, setActiveQuestions] = useState([-1, -1]);
  const onClickQuestion = (id, numberOfBlock) => {
    setActiveQuestions((prevArr) =>
      prevArr.map((item, i) => (i === numberOfBlock ? -1 : item))
    );
    if (activeQuestions[numberOfBlock] !== id) {
      setTimeout(() => {
        setActiveQuestions((prevArr) =>
          prevArr.map((item, i) => (i === numberOfBlock ? id : item))
        );
      }, 200);
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
          className="faq__wrapper mb-[60px] md:mb-[80px] lg:mb-[150px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="faq__title title md:mb-[50px] text-center"
            variants={animations}
            custom={1}
          >
            Every Question Answered
          </motion.h2>
          <div
            className="faq__row flex flex-col justify-center lg:flex-row
          lg:justify-between gap-[20px] xl:gap-[60px] items-center lg:items-start mx-auto"
          >
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
                    isActive={activeQuestions[0] === index ? true : false}
                    numberOfBlock={0}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="faq__img lg:w-[80%] lg:h-[80%]"
              variants={animationsTop}
              custom={2}
            >
              <img className="rounded-[40px]" src={img1} alt="" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="faq__wrapper mb-[40px] sm:mb-[60px] md:mb-[100px] lg:mb-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className="faq__title title  md:mb-[50px] text-center"
            variants={animations}
            custom={1}
          >
            Project related questions
          </h2>
          <div className="faq__row flex flex-col-reverse justify-center lg:flex-row xl:justify-between gap-[20px] xl:gap-[60px] items-center lg:items-start mx-auto">
            <motion.div
              className="faq__img lg:w-[80%] lg:h-[80%]"
              variants={animationsTop}
              custom={1}
            >
              <img className="rounded-[40px] " src={img2} alt="" />
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
                    onClickQuestion={onClickQuestion}
                    isActive={activeQuestions[1] === index ? true : false}
                    numberOfBlock={1}
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
