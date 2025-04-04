import { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import bg from "../../img/pages/blog/bg.jpg";
import Articles from "../../components/Articles/Articles";

import "./index.scss";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="blog">
      <Title title="Articles & News" img={bg} subtitle="Blog"></Title>
      <div className="container">
        <div className="blog__latest">
          <h2 className="blog__title title">Latest Post</h2>
          <div className="blog__wrapper">
            <div className="blog__img"></div>
            <div className="blog__content">
              <h3 className="blog__subtitle subtitle">
                Low Cost Latest Invented Interior Designing Ideas
              </h3>
              <div className="blog__text text">
                <p>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpis dignissim maximus.posuere in.Contrary to popular
                  belief. Lorem Ipsum is not simply random text. It has roots in
                  a piece of classica.
                </p>
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
