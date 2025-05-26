import { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import bg from "./../../img/pages/project/bg.jpg";
import "./index.scss";
import { rooms } from "./../../data/rooms";
import Room from "../../components/Room/Room";
const categories = ["Bathroom", "Bed Room", "Kitchan", "Living Area"];

const Project = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageRooms, setCurrentPageRooms] = useState(
    rooms[categoryIndex]
  );
  const [pageCount, setPageCount] = useState(
    Math.ceil(rooms[categoryIndex].length / 8)
  );
  const heights = [853, 522, 522, 853, 853, 522, 522, 522];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const chooseCategory = (index) => {
    setCategoryIndex(index);
    setCurrentPageRooms([].concat(rooms[index].slice(0, 8)));
    setPageCount(Math.ceil(rooms[index].length / 8));
    setCurrentPage(1);
  };
  const nextPage = () => {
    if (currentPage == pageCount) {
      setCurrentPage(1);
      setCurrentPageRooms([].concat(rooms[categoryIndex].slice(0, 8)));
    } else {
      setCurrentPage((prev) => prev + 1);
      setCurrentPageRooms(
        [].concat(
          rooms[categoryIndex].slice(currentPage * 8, (currentPage + 1) * 8)
        )
      );
    }
  };
  const pickPage = (index) => {
    setCurrentPage(index + 1);
    setCurrentPageRooms(
      [].concat(rooms[categoryIndex].slice(index * 8, (index + 1) * 8))
    );
  };
  return (
    <div className="project">
      <Title title="Our Project" img={bg} subtitle="Project" />
      <div className="container">
        <div className="project__wrapper flex-col justify-center">
          <div className="project__categories flex">
            {categories.map((category, index) => (
              <div
                className="project__category"
                style={{
                  color: `${categoryIndex === index ? "white" : "inherit"}`,
                }}
              >
                <button onClick={() => chooseCategory(index)}>
                  {category}
                </button>
              </div>
            ))}
            <div
              className="project__selection"
              style={{ left: `${categoryIndex * 219}px` }}
            ></div>
          </div>
          <div className="project__rooms flex gap-[35px]">
            <div className="project__rooms-col flex flex-col gap-[35px]">
              {currentPageRooms
                .filter((_, index) => index % 2 === 0)
                .map((room, index) => (
                  <Room
                    title={room.title}
                    img={room.img}
                    height={index % 2 === 0 ? 853 : 522}
                  />
                ))}
            </div>
            <div className="project__rooms-col flex flex-col gap-[35px]">
              {currentPageRooms
                .filter((_, index) => index % 2 === 1)
                .map((room, index) => (
                  <Room
                    title={room.title}
                    img={room.img}
                    height={index % 2 === 0 ? 522 : 853}
                  />
                ))}
            </div>
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
      </div>
    </div>
  );
};

export default Project;
