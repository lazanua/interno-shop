import React, { useState, useRef } from "react";

const MobileCarousel = ({ slidersInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Центральный слайд по умолчанию
  const [startX, setStartX] = useState(null);
  const carouselRef = useRef(null);

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center h-full">
          <img
            src="https://placehold.co/300x200/4a6984/white?text=Slide+1"
            alt="Горный пейзаж с заснеженными вершинами"
            className="w-full h-full object-cover rounded-xl"
          />
          <h3 className="mt-2 text-sm font-medium text-gray-800">
            Горный пейзаж
          </h3>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center h-full">
          <img
            src="https://placehold.co/300x200/587d71/white?text=Slide+2"
            alt="Зеленый лес с солнечными лучами"
            className="w-full h-full object-cover rounded-xl"
          />
          <h3 className="mt-2 text-sm font-medium text-gray-800">
            Лесной пейзаж
          </h3>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col items-center h-full">
          <img
            src="https://placehold.co/300x200/8a6b73/white?text=Slide+3"
            alt="Океан с волнами на закате"
            className="w-full h-full object-cover rounded-xl"
          />
          <h3 className="mt-2 text-sm font-medium text-gray-800">Океан</h3>
        </div>
      ),
    },
  ];

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Свайп вправо - следующий слайд
        setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
      } else {
        // Свайп влево - предыдущий слайд
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
      setStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  const getSlideStyle = (index) => {
    const distance = Math.abs(index - currentIndex);

    if (distance === 0) {
      // Центральный активный слайд
      return "z-10 scale-100 opacity-100";
    } else if (distance === 1) {
      // Ближайшие боковые слайды
      return "z-0 scale-90 opacity-80 blur-sm";
    } else {
      // Дальние слайды (если их больше 3)
      return "hidden";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold text-gray-800 mb-6">
        Мобильный карусель
      </h1>

      <div
        className="relative w-full max-w-sm h-64"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Контейнер для всех слайдов */}
          <div className="relative w-full h-full flex items-center justify-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute transition-all duration-300 ease-out w-4/5 h-5/6 ${getSlideStyle(
                  index
                )}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 60}%)`,
                }}
              >
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 w-4" : "bg-gray-300"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-600 text-center max-w-xs">
        Свайпайте влево/вправо или нажмите на точки для навигации
      </p>
    </div>
  );
};

export default MobileCarousel;
