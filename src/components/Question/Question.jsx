import { useState } from "react";
import "./index.scss";
const Question = ({ title, id, onClickQuestion, isActive }) => {
  return (
    <div
      onClick={() => onClickQuestion(id)}
      className={`question lg:w-[100%] xl:w-[585px] mt-[20px]  ${
        isActive ? "active" : ""
      }`}
    >
      <div className="question__row flex items-center justify-between gap-[20px]">
        <div className="question__title subtitle mb-[13px]">{title}</div>
        <div className="question__icon-open">
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.52858L7.68571 7.47144L14.3714 1.52858"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="question__icon-close">
          <svg
            width="8"
            height="17"
            viewBox="0 0 8 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999526 15.1855L6.94238 8.49983L0.999525 1.81412"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="question__text text mb-[4px]">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary popular belief. There are many
        variations of passages of Lorem Ipsum available, but the majority
        randomised.
      </div>
    </div>
  );
};

export default Question;
