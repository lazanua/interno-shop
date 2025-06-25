import React, { useEffect, useRef, useState } from "react";
import Review from "../Review/Review";
import arrow from "../../img/people/arrow.svg";
const slides = ["Слайд 1: Новости", "Слайд 2: Акции", "Слайд 3: Контакты"];

const SliderReview = ({ slidersInfo }) => {
  const [index, setIndex] = useState(1); // начинаем с первого настоящего слайда
  const [isAnimating, setIsAnimating] = useState(true);
  const trackRef = useRef(null);
  const timeoutRef = useRef(null);

  const extendedSlides = [
    slidersInfo[slides.length - 1], // клон последнего слайда в начало
    ...slidersInfo,
    slidersInfo[0], // клон первого слайда в конец
  ];

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  useEffect(() => {
    const track = trackRef.current;

    const handleTransitionEnd = () => {
      // если в конце — прыгаем на первый
      if (index === extendedSlides.length - 1) {
        setIsAnimating(false);
        setIndex(1);
      }

      // если в начале — прыгаем на последний
      if (index === 0) {
        setIsAnimating(false);
        setIndex(extendedSlides.length - 2);
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [index, extendedSlides.length]);

  useEffect(() => {
    if (!isAnimating) {
      const id = setTimeout(() => setIsAnimating(true), 50); // включаем анимацию обратно
      return () => clearTimeout(id);
    }
  }, [isAnimating]);

  return (
    <div className="flex items-center">
      <button
        onClick={() => {
          clearTimeout(timeoutRef.current);
          prev();
        }}
        className="]"
      >
        <img src={arrow} className="h-[20px] w-[12px] " alt="" />
      </button>
      <div className="relative w-[370px] sm:w-[430px] pt-[24px] h-[250px] overflow-hidden rounded-lg shadow-lg mx-auto bg-white">
        <div
          ref={trackRef}
          className={`flex w-full h-full ${
            isAnimating ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {extendedSlides.map((review, idx) => (
            <div
              key={idx}
              className="min-w-full flex items-center justify-center"
            >
              <Review
                img={review.img}
                name={review.name}
                city={review.city}
                text={review.text}
                custom={1}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          clearTimeout(timeoutRef.current);
          next();
        }}
        className=""
      >
        <img src={arrow} className="h-[20px] w-[12px] rotate-[180deg]" alt="" />
      </button>
    </div>
  );
};

export default SliderReview;
