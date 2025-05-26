import { useEffect } from "react";
import "./index.module.scss";
import facebook from "./../../img/footer/facebook.svg";
import twitter from "./../../img/footer/twitter.svg";
import linkedin from "./../../img/footer/linkedin.svg";
import insta from "./../../img/footer/insta.svg";
import { Form } from "react-router-dom";
import SendForm from "../../components/SendForm/SendForm";
const ArticlePage = () => {
  const inputs = [
    { name: "Name", type: "text" },
    { name: "Email", type: "email" },
    { name: "Website", type: "text" },
    { name: "Phone", type: "phone" },
    { name: "Hello Iam Intrested in..", type: "text" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="article-page text mb-[200px]">
      <div className="container">
        <div className="article-page__row flex gap-[52px]">
          <div className="article-page__item max-w-[804px]">
            <h2 className="article-page__title title mb-[21px]">
              Let’s Get Solution for Building Construction Work
            </h2>
            <div className="article-page__img mb-[46px]">
              <img
                className="rounded-[50px]"
                src="/img/example-page/01.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between mb-[48px]">
              <div className="article-page__date text-[16px]">
                26 December,2022
              </div>
              <div className="article-page__category text-[16px]">
                Interior / Design / Home / Decore
              </div>
            </div>
            <div className="article-page__text">
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injecthumour,
                or randomised words which don't look even slightly believable.
                Embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary.
              </p>
            </div>
            <div className="article-page__quote bg-light rounded-[50px] flex flex-col items-center mt-[35px] mb-[27px]">
              <svg
                width="74"
                height="56"
                viewBox="0 0 74 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.2516 0.600102C62.6516 0.600102 66.2516 2.06677 69.0516 5.0001C71.7182 7.93344 73.0516 11.8668 73.0516 16.8001C73.0516 25.4668 70.1849 33.0001 64.4516 39.4001C58.5849 45.8001 51.5849 51.0668 43.4516 55.2001L41.4516 51.8001C44.7849 49.6668 47.9182 46.9334 50.8516 43.6001C53.6516 40.2668 55.8516 36.6668 57.4516 32.8001L51.8516 28.6001C49.5849 27.1334 47.7182 25.1334 46.2516 22.6001C44.7849 20.2001 44.0516 17.8668 44.0516 15.6001C44.0516 11.3334 45.3849 7.73344 48.0516 4.8001C50.5849 2.0001 53.9849 0.600101 58.2516 0.600102ZM17.0516 0.600098C21.4516 0.600099 25.0516 2.06677 27.8516 5.0001C30.5182 7.93343 31.8516 11.8668 31.8516 16.8001C31.8516 25.4668 28.9849 33.0001 23.2516 39.4001C17.3849 45.8001 10.3849 51.0668 2.25158 55.2001L0.251587 51.8001C3.58492 49.6668 6.71825 46.9334 9.65158 43.6001C12.4516 40.2668 14.6516 36.6668 16.2516 32.8001L10.6516 28.6001C8.38492 27.1334 6.51825 25.1334 5.05158 22.6001C3.58492 20.2001 2.85159 17.8668 2.85159 15.6001C2.85159 11.3334 4.18492 7.73343 6.85159 4.8001C9.38492 2.0001 12.7849 0.600098 17.0516 0.600098Z"
                  fill="#CDA274"
                />
              </svg>
              <span className="mt-[8px]">
                The details are not the details. They make the design.
              </span>
            </div>
            <div className="article-page__subtitle title mb-[20px]">
              Design sprints are great
            </div>
            <div className="article-page__text mb-[24px]">
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
              <div className="article-page__numbered mt-[32px]">
                <p data-number="1" className="--numbered">
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </p>
                <p data-number="2" className="--numbered">
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </p>
                <p data-number="3" className="--numbered">
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </p>
              </div>
            </div>
            <div className="article-page__img mt-[44px]">
              <img
                className="rounded-[50px]"
                src="/img/example-page/02.jpg"
                alt=""
              />
            </div>
            <div className="article-page__block flex mt-[106px] mb-[137px] items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="article-page__subtitle subtitle">Tags</div>
                <div className="article-page__tags flex gap-[20px]">
                  <div className="article-page__tag article-page__tag--active">
                    Kitchan
                  </div>
                  <div className="article-page__tag">Bedroom</div>
                </div>
              </div>
              <div className="artical-page__socials flex text-[20px] gap-[54px]">
                <div className="artical-page__social social">
                  <img src={facebook} alt="" />
                </div>
                <div className="artical-page__social social">
                  <img src={twitter} alt="" />
                </div>
                <div className="artical-page__social social">
                  <img src={linkedin} alt="" />
                </div>
                <div className="artical-page__social social">
                  <img src={insta} alt="" />
                </div>
              </div>
            </div>
            <div className="article-page__block">
              <div className="article__page__subtitle subtitle mb-[36px]">
                Leave a Reply
              </div>
              <div className="article-page__form">
                <SendForm hasCheckbox={true} inputsNames={inputs} />
              </div>
            </div>
          </div>
          <div className="article-page__item">
            <div className="article-page__search flex justify-between bg-light px-[33px] py-[34px] rounded-[20px] mb-[50px]">
              <input type="text" placeholder="Search" />
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5197 24.2898L20.4143 18.1691C21.8842 16.2073 22.6777 13.8195 22.675 11.3659C22.675 5.09879 17.589 0 11.3375 0C5.08605 0 0 5.09879 0 11.3659C0 17.633 5.08605 22.7318 11.3375 22.7318C13.7849 22.7345 16.1668 21.939 18.1237 20.4654L24.2291 26.5862C24.5382 26.8631 24.9413 27.011 25.3556 26.9994C25.77 26.9877 26.1642 26.8175 26.4574 26.5237C26.7505 26.2298 26.9203 25.8346 26.9319 25.4192C26.9435 25.0038 26.796 24.5997 26.5197 24.2898ZM3.23929 11.3659C3.23929 9.76023 3.71424 8.1906 4.60408 6.85552C5.49393 5.52043 6.7587 4.47986 8.23845 3.86539C9.71821 3.25092 11.3465 3.09015 12.9174 3.4034C14.4883 3.71666 15.9313 4.48987 17.0638 5.62526C18.1964 6.76066 18.9676 8.20724 19.2801 9.78208C19.5926 11.3569 19.4322 12.9893 18.8193 14.4727C18.2063 15.9562 17.1684 17.2241 15.8366 18.1162C14.5049 19.0083 12.9392 19.4844 11.3375 19.4844C9.19052 19.4818 7.1322 18.6257 5.61405 17.1037C4.09589 15.5818 3.24186 13.5183 3.23929 11.3659Z"
                  fill="#CDA274"
                />
              </svg>
            </div>
            <div className="article-page__news-wrapper flex flex-col gap-[34px]">
              <div className="subtitle mb-[33px]">Latest News</div>
              <div className="article-page__news">
                <div className="article-page__news-title mb-[5px]">
                  <a href="">We Focus On Comfort And Gorgeous</a>
                </div>
                <div className="text-right text-[16px]">06/02/2020</div>
              </div>
              <div className="article-page__news">
                <div className="article-page__news-title mb-[5px]">
                  <a href="">We Focus On Comfort And Gorgeous</a>
                </div>
                <div className="text-right text-[16px]">06/02/2020</div>
              </div>
              <div className="article-page__news">
                <div className="article-page__news-title mb-[5px]">
                  <a href="">We Focus On Comfort And Gorgeous</a>
                </div>
                <div className="text-right  text-[16px]">06/02/2020</div>
              </div>
            </div>
            <div className="article-page__categories bg-light py-[27px] px-[32px] rounded-[20px] mt-[50px]">
              <div className="article-page__subtitle subtitle mb-[18px]">
                Categories
              </div>
              <div className="article-page__category">Decoration</div>
              <div className="article-page__categories-line w-[100%] h-[1px] mb-[20px]"></div>
              <div className="article-page__category">Door Window</div>
              <div className="article-page__categories-line w-[100%] h-[1px] mb-[20px]"></div>
              <div className="article-page__category">Home Land</div>
              <div className="article-page__categories-line w-[100%] h-[1px] mb-[20px]"></div>
              <div className="article-page__category">Roof Installation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
