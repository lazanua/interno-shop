import arrow from "../../img/pages/faq/arrow.svg";
const Question = ({ title, id, onClickQuestion, isActive, numberOfBlock }) => {
  return (
    <div className="mb-[20px]">
      <div
        className="text-dark w-full lg:w-[500px] xl:w-[585px]"
        onClick={() => onClickQuestion(id, numberOfBlock)}
        style={{ borderBottom: "1px solid var(--brown)" }}
      >
        <button
          className={`flex gap-[10px] justify-between w-full items-center pr-[4px] sm:pr-[22px] ${
            isActive ? "pb-[13px]" : "md:pb-[26px] pb-[20px] lg:pb-[32px]"
          } `}
        >
          <p
            className={`text-start text-[18px] sm:text-[20px] lg:text-[25px] leading-[1.5]
          ${isActive ? "text-[var(--brown)]" : "text-[var(--dark-color)]"} `}
            style={{ fontFamily: "var(--title)" }}
          >
            {title}
          </p>
          <img
            src={arrow}
            className={`transition-all duration-300 ease-in-out ${
              isActive ? "rotate-[90deg]" : ""
            } `}
            alt=""
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isActive ? `max-h-[250px] opacity-100` : "max-h-0 opacity-0"
          }`}
        >
          <div className="question__text text mb-[32px]">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary popular belief. There are many
            variations of passages of Lorem Ipsum available, but the majority
            randomised.
          </div>
        </div>
      </div>
      {/* <div
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
    </div> */}
    </div>
  );
};

export default Question;
