import { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import bg from "../../img/pages/blog/bg.jpg";
import Articles from "../../components/Articles/Articles";
import mainImg from "../../img/pages/blog/main-photo.jpg";
import "./index.scss";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="blog">
      <Title title="Articles & News" img={bg} subtitle="Blog"></Title>
      <div className="container">
        <h2 className="blog__title title mb-[27px]">Latest Post</h2>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-y-[30px] gap-x-[65px] mb-[44px] sm:mb-[54px] md:mb-[100px]  lg:mb-[172px]">
          <img src={mainImg} className="rounded-[50px] " alt="" />
          <div className="blog__latest">
            <div className="blog__wrapper">
              <div className="blog__img"></div>
              <div className="blog__content">
                <h3 className="blog__subtitle subtitle mb-[22px]">
                  Low Cost Latest Invented Interior Designing Ideas
                </h3>
                <div className="blog__text min-w-[300px] text max-w-fit">
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpis dignissim maximus.posuere in.Contrary to popular
                    belief. <br /> <br />
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classica.
                  </p>
                </div>
                <div className="flex justify-between mt-[41px]">
                  <p
                    className="text-[16px] leading-[1.5] text-[#4d5053]"
                    style={{ fontFamily: "var(--text)" }}
                  >
                    26 December,2022{" "}
                  </p>
                  <div className="w-[52px] hover:cursor-pointer transition-all hover:bg-[var(--brown)] h-[53px] rounded-full flex items-center justify-center bg-light">
                    <svg
                      width="9"
                      height="17"
                      viewBox="0 0 9 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.77101 15.1855L7.71387 8.49983L1.77101 1.81412"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="blog__title title mb-[30px]">Articles & News</h2>
        <Articles />
      </div>
    </section>
  );
};

export default Blog;
