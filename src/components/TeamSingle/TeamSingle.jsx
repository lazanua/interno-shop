import "./index.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import facebook from "../../img/footer/facebook.svg";
import twitter from "../../img/footer/twitter.svg";
import linkedin from "../../img/footer/linkedin.svg";
import { animationsLeft, animationsRight } from "../../data/animations";
const TeamSingle = ({ person, img }) => {
  const questions = [
    "Website & Mobile App Design?",
    "How to Easy Successful Projects?",
    "International Trade Experience?",
  ];
  const [activeQuestion, setActiveQuestion] = useState(0);
  return (
    <div className="single text mb-[40px] sm:mb-[60px] md:mb-[90px] lg:mb-[170px] xl:mb-[200px]">
      <div className="container">
        <motion.div
          className="single__wrapper text flex lg:flex-row flex-col gap-x-[59px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="single__img"
            variants={animationsLeft}
            custom={1}
          >
            <img
              className="w-[80%] mx-auto lg:mx-0 h-auto lg:w-[590px] lg:h-[689px] rounded-[50px] object-cover"
              src={img}
              alt=""
            />
          </motion.div>
          <div className="single__info pt-[30px] md:pt-[67.5px]">
            <motion.div className="" variants={animationsRight} custom={2}>
              <div className="single__name title">{person.name}</div>
              <div className="single__job mb-[30px]">Designer</div>

              <div className="single__text max-w-max lg:max-w-[552px] mb-[32px]">
                <p>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpmaximus.posuere in.Contrpobelie frandomised words which
                  don't look even slightly believable.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="single__linkes flex flex-col gap-[30px]"
              variants={animationsRight}
              custom={2.5}
            >
              <a href="/" className="single__row flex gap-[15px] items-center">
                <div className="single__icon icon">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4.50488L12 11.5049L20 4.50488M3.11538 1.50488H20.8846C22.0529 1.50488 23 2.45628 23 3.62988V16.3799C23 17.5535 22.0529 18.5049 20.8846 18.5049H3.11538C1.94709 18.5049 1 17.5535 1 16.3799V3.62988C1 2.45628 1.94709 1.50488 3.11538 1.50488Z"
                      stroke="#CDA274"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="single__link">{person.email}</div>
              </a>
              <a href="/" className="single__row flex gap-[15px] items-center">
                <div className="single__icon icon">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3445 17.9603C20.5429 17.1527 18.6013 15.974 17.6593 15.499C16.4326 14.8811 16.3317 14.8306 15.3675 15.5469C14.7243 16.025 14.2967 16.452 13.5441 16.2915C12.7914 16.131 11.1558 15.2259 9.72358 13.7984C8.2914 12.3708 7.33376 10.6879 7.17272 9.93775C7.01169 9.18764 7.44583 8.76513 7.91935 8.12052C8.58672 7.21191 8.53624 7.06047 7.96579 5.83384C7.52105 4.8798 6.30797 2.95656 5.49723 2.159C4.62994 1.30238 4.62994 1.45381 4.07111 1.68602C3.61615 1.87742 3.17968 2.11009 2.76716 2.38111C1.95945 2.91769 1.51117 3.36342 1.19767 4.03327C0.88418 4.70312 0.743336 6.27351 2.36229 9.21439C3.98125 12.1553 5.1171 13.659 7.46804 16.0033C9.81899 18.3475 11.6268 19.6079 14.2695 21.09C17.5387 22.9208 18.7927 22.564 19.4646 22.251C20.1365 21.938 20.5843 21.4938 21.1219 20.6862C21.3936 20.2744 21.6268 19.8384 21.8186 19.3838C22.0513 18.827 22.2027 18.827 21.3445 17.9603Z"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </div>
                <div className="single__link">
                  <a href="">+1 (378) 400-1234</a>
                </div>
              </a>
              <a href="/" className="single__row flex gap-[15px] items-center">
                <div className="single__icon icon">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.0049C22 6.20616 17.2987 1.50488 11.5 1.50488C5.70127 1.50488 1 6.20616 1 12.0049C1 17.8036 5.70127 22.5049 11.5 22.5049C17.2987 22.5049 22 17.8036 22 12.0049Z"
                      stroke="#CDA274"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M21.4475 7.83587C20.6349 7.84096 20.7148 9.34884 19.7025 8.6374C19.3265 8.37379 19.0953 7.99058 18.6233 7.87404C18.2109 7.77226 17.7885 7.87811 17.3812 7.94885C16.9183 8.02926 16.3693 8.06539 16.0182 8.41806C15.6787 8.7575 15.4991 9.21297 15.1379 9.55444C14.4392 10.216 14.1442 10.9382 14.5965 11.8735C15.0316 12.7727 15.9418 13.2608 16.9238 13.1967C17.8887 13.132 18.8909 12.5692 18.8631 13.9794C18.853 14.4781 18.9567 14.8241 19.109 15.2878C19.2501 15.7152 19.2405 16.1295 19.2729 16.5707C19.3326 17.3951 19.4834 18.3193 19.8902 19.0475L20.6491 17.9707C20.7427 17.8374 20.9385 17.6506 20.985 17.4933C21.0675 17.215 20.9051 16.7366 20.8864 16.4246C20.8676 16.1127 20.8767 15.7967 20.8292 15.4847C20.7624 15.0475 20.5054 14.6379 20.47 14.2058C20.4047 13.4012 20.5509 12.759 19.9347 12.0862C19.3397 11.4374 18.4675 11.2817 17.6342 11.4135C17.2142 11.4796 15.5239 11.7514 16.2024 10.786C16.3364 10.5962 16.5707 10.4404 16.7215 10.2598C16.8525 10.1025 16.9663 9.81347 17.1201 9.69083C17.2739 9.56818 17.9802 9.42722 18.1826 9.48981C18.385 9.55241 18.596 9.84604 18.7715 9.97632C19.0959 10.2221 19.4744 10.3855 19.875 10.4527C20.5661 10.5544 22.0111 10.1504 21.9999 9.25877C21.9979 8.83129 21.6033 8.23587 21.4475 7.83587ZM13.4475 15.1722C13.1778 14.0302 11.6352 13.6486 10.8035 13.0292C10.3254 12.673 9.89986 12.1229 9.27199 12.0781C8.98259 12.0572 8.74024 12.1203 8.45337 12.0455C8.19029 11.9773 7.98386 11.8348 7.70357 11.872C7.17992 11.9412 6.84954 12.504 6.28694 12.4277C5.75317 12.3554 5.20321 11.7275 5.08179 11.216C4.92596 10.5585 5.44303 10.3453 5.99703 10.2868C6.22825 10.2623 6.48779 10.2359 6.7099 10.3209C7.00234 10.4303 7.14046 10.7183 7.40304 10.8639C7.89532 11.1351 7.99499 10.7015 7.91961 10.2618C7.80678 9.6033 7.67524 9.3346 8.25909 8.88167C8.66385 8.5692 9.00991 8.34325 8.94515 7.78193C8.9067 7.45216 8.72709 7.30305 8.89456 6.97481C9.02155 6.72494 9.37014 6.49949 9.59731 6.35038C10.1837 5.96565 12.1093 5.99415 11.3226 4.91731C11.0913 4.60128 10.6648 4.0364 10.2601 3.95905C9.75415 3.86286 9.52951 4.4308 9.17687 4.68118C8.81259 4.94021 8.10326 5.23436 7.73848 4.83385C7.24772 4.29492 8.0638 4.11782 8.24442 3.74174C8.42504 3.36566 7.82601 2.65473 7.50524 2.47457L5.99703 4.17584C5.95371 4.46075 5.96879 4.75157 6.04135 5.0304C6.11392 5.30924 6.24243 5.57019 6.41899 5.79721C6.71901 6.1855 7.19662 6.31018 7.21837 6.84046C7.23962 7.34936 7.1607 7.60992 6.82981 7.96768C6.68663 8.12035 6.58544 8.33714 6.43973 8.48015C6.26113 8.6547 6.32741 8.60126 6.04864 8.6491C5.52448 8.73816 5.07824 8.87556 4.5718 9.01602C3.72789 9.25063 3.64997 7.86386 3.26546 7.31985L2.00061 8.34732C1.98695 8.51577 2.20804 8.82569 2.26825 9.0089C2.61381 10.0557 3.31099 10.8654 3.76128 11.8669C4.23535 12.9275 5.50829 12.6333 6.07039 13.5626C6.56925 14.387 6.0365 15.4308 6.40988 16.2939C6.68106 16.9203 7.32057 17.0572 7.76175 17.5152C8.21255 17.9778 8.20293 18.6109 8.27174 19.2129C8.34934 19.921 8.47528 20.6229 8.64867 21.3137C8.70989 21.5524 8.76605 21.8679 8.92845 22.0648C9.03976 22.2002 9.42174 22.3167 9.26743 22.3615C9.48296 22.3971 9.86697 22.5997 10.0466 22.4511C10.2834 22.2557 10.2201 21.6541 10.2611 21.3824C10.384 20.5732 10.7868 19.7819 11.3302 19.1763C11.867 18.5788 12.6026 18.1743 13.0559 17.4969C13.4976 16.8363 13.6307 15.9453 13.4475 15.1722ZM11.7582 16.5117C11.4546 17.0567 10.7787 17.4216 10.3441 17.8547C10.2262 17.9722 9.97524 18.3793 9.82751 18.2913C9.72177 18.2282 9.68585 17.7 9.64689 17.5788C9.44591 16.9689 9.06223 16.4365 8.54849 16.0547C8.39013 15.9341 7.99752 15.7773 7.90696 15.6119C7.80577 15.4323 7.89684 15.0084 7.90038 14.8129C7.90595 14.528 7.77693 14.0542 7.84675 13.7951C7.9277 13.4964 7.77187 13.6766 8.03749 13.6175C8.17764 13.586 8.75643 13.6883 8.93098 13.7249C9.20824 13.7829 9.36103 13.9565 9.5796 14.132C10.1543 14.5956 10.7873 14.9544 11.4313 15.3096C11.9302 15.5875 12.0769 15.9391 11.7582 16.5117ZM8.23683 2.48984C8.47665 2.72546 8.7023 3.00434 9.06 3.02775C9.39847 3.05065 9.71772 2.86643 10.0132 3.09798C10.341 3.35243 10.5773 3.67457 11.0124 3.75396C11.4334 3.8308 11.8791 3.58347 11.9833 3.1504C12.0845 2.73768 11.8665 2.28882 11.8533 1.87458C11.8533 1.81707 11.8842 1.5616 11.8447 1.51834C11.8154 1.48577 11.5705 1.52241 11.533 1.52343C11.2588 1.53158 10.9853 1.55057 10.7124 1.58043C9.71763 1.68873 8.74342 1.9398 7.81943 2.32597C7.94237 2.41147 8.09669 2.44557 8.23683 2.48984ZM16.936 5.34886C17.3655 5.34886 17.8016 5.15548 17.663 4.65574C17.5466 4.23691 17.3483 3.78246 16.8657 4.00841C16.5585 4.15192 16.1234 4.51731 16.0875 4.87965C16.0465 5.29085 16.6496 5.34886 16.936 5.34886ZM16.5929 7.53562C17.0316 7.79974 17.6822 7.67557 18.0131 7.29847C18.2717 7.00331 18.4239 6.49084 18.8889 6.49135C19.0936 6.49092 19.2903 6.57154 19.4363 6.71578C19.6286 6.91578 19.5906 7.10356 19.6316 7.35394C19.7232 7.91628 20.3227 7.386 20.4791 7.16819C20.5803 7.02621 20.7174 6.81552 20.6713 6.63079C20.6288 6.45827 20.4285 6.27456 20.3394 6.11629C20.0794 5.65828 19.8654 5.12545 19.4758 4.75548C19.1009 4.39925 18.64 4.44047 18.2843 4.81044C17.9929 5.11578 17.6544 5.35751 17.4551 5.72901C17.3144 5.99008 17.1561 6.11476 16.8712 6.18245C16.7144 6.2196 16.5353 6.23334 16.4037 6.33919C16.0374 6.62926 16.2459 7.32595 16.5929 7.53562Z"
                      fill="#CDA274"
                    />
                  </svg>
                </div>
                <div className="single__link">
                  <a href="">www.yourdomain.com</a>
                </div>
              </a>
            </motion.div>
            <motion.div
              className="single__socials items-center mt-[48px] flex gap-[35px]"
              variants={animationsRight}
              custom={2.5}
            >
              <a className="single__social social">
                <img src={facebook} alt="" />
              </a>
              <a className="single__social social">
                <img src={twitter} alt="" />
              </a>
              {person.hasOwnProperty("linkedInUrl") && (
                <a className="single__social social">
                  <img src={linkedin} alt="" />
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
        <div className="single__title title mt-[35px] sm:mt-[50px] md:mt-[70px] lg:mt-[100px] mb-[18px]">
          Short Biography​
        </div>
        <div className="single__text mb-[45px]">
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, njecthumour randomised words
            which don't look even slightly believable. <br /> <br />
          </p>
          <p>
            Embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined but the
            majority have suffered alteration in some form chunks as necessary.
          </p>
        </div>
        <div
          className="single__row w-full flex flex-col gap-y-[30px] md:gap-y-[45px]
         lg:flex-row gap-x-[60px] xl:gap-x-[95px]"
        >
          <div className="single__item">
            <div className="single__subtitle subtitle mb-[12px]">
              Simplicity and Functionality
            </div>
            <div className="single__text">
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in belief.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum from
                available, but the majority have suffered alteration in some
                form, njecthumour
              </p>
            </div>
            <div className="single__columns flex flex-col gap-[20px] mt-[30px]">
              {person.skills.map((skill) => (
                <div className="single__skill">
                  <div className="font-medium leading-[1.5] mb-[24px] md:mb-[6px]">
                    {skill.skill}
                  </div>
                  <div className="single__progress-line w-full lg:w-[533px]">
                    <div
                      className="single__complete-line"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                    <div
                      className="single__circle"
                      style={{ left: `${skill.percentage}%` }}
                    ></div>
                    <div
                      className="single__persentage"
                      style={{ left: `${skill.percentage}%` }}
                    >
                      {skill.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="single__item w-full max-w-max lg:w-auto lg:max-w-[577px]">
            <div className="single__subtitle subtitle mb-[12px]">
              Qustion And Answer
            </div>
            <div className="single__text ">
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.
              </p>
            </div>
            <div className="flex flex-col gap-[30px] mt-[19px]">
              {questions.map((question, index) => (
                <div
                  className={`single__block ${
                    activeQuestion === index ? "active" : ""
                  }`}
                  onClick={() => setActiveQuestion(index)}
                >
                  <div className="flex justify-between">
                    <div className="single__block-title font-bold">
                      {question}
                    </div>
                    <div className="single__block-icon w-[30px] h-[30px] md:w-[44px] md:h-[44px]">
                      <div
                        className={`single__plus ${
                          activeQuestion === index ? "" : "none"
                        }`}
                      >
                        <svg
                          width="17"
                          height="18"
                          viewBox="0 0 17 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_15352_4)">
                            <path
                              d="M0.469727 9.98503H16.3947V8.16503H0.469727V9.98503ZM7.46972 0.780029V17.37H9.39473V0.780029H7.46972Z"
                              fill="#292F36"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_15352_4">
                              <rect width="17" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className={`single__minus w-[13px] h-[2px] md:w-[18px] md:h-[2px] ${
                          activeQuestion === index ? "none" : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div className="single__block-text">
                    <p>
                      Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem
                      turpmaximus.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSingle;
