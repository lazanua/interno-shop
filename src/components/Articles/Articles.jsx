import { useState, useEffect } from "react";
import { articles } from "../../data/articles";
import { Link } from "react-router-dom";
import Article from "../Article/Article";
const Articles = () => {
  const [currentArticles, setCurrentArticles] = useState(
    [].concat(articles.slice(0, 6))
  );

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (articles.length > 6) {
      setPageCount((articles.length % 6) + 1);
    } else {
      setPageCount(1);
    }
  }, []);

  const pickPage = (index) => {
    setCurrentPage(index + 1);
    setCurrentArticles([].concat(articles.slice(index * 6, (index + 1) * 6)));
  };
  const nextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1);
      console.log(currentPage);
      setCurrentArticles(
        [].concat(articles.slice(currentPage * 6, (currentPage + 1) * 6))
      );
    } else {
      setCurrentPage(1);
      setCurrentArticles([].concat(articles.slice(0, 6)));
    }
  };

  return (
    <div className="">
      <div className="blog__articles ">
        {currentArticles.map((article) => (
          <Article
            category={article.category}
            title={article.title}
            date={article.date}
            img={article.img}
          />
        ))}
      </div>
      <div className="article__pages flex justify-center gap-[20px] items-center mt-[51px] mb-[200px]">
        {Array.from({ length: pageCount }).map((_, index) => (
          <div key={index}>
            <button
              onClick={() => pickPage(index)}
              className={`article__number ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              0{index + 1}
            </button>
          </div>
        ))}
        <button className="article__number" onClick={() => nextPage()}>
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00001 14.3715L6.94287 7.68575L1.00001 1.00003"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Articles;
