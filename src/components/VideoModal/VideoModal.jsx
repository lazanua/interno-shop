import { useState } from "react";
import { motion } from "framer-motion";
import { animationsTop } from "../../data/animations";
export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Функция открытия модального окна
  const openModal = () => setIsOpen(true);

  // Функция закрытия модального окна
  const closeModal = () => setIsOpen(false);

  return (
    <motion.div
      className="flex justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationsTop}
      custom={1}
    >
      {/* Кнопка открытия */}
      <img
        src="/img/example-video-img/video-preview.jpg"
        alt=""
        className="rounded-[70px]"
      />
      <button
        onClick={openModal}
        className="w-[132px] h-[132px] flex justify-center items-center absolute bg-white rounded-[50%]"
      >
        <svg
          width="21"
          height="32"
          viewBox="0 0 21 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.94101 31.4289L20.1666 17.7781C20.428 17.558 20.6378 17.2851 20.7817 16.9779C20.9255 16.6708 21 16.3368 21 15.9987C21 15.6607 20.9255 15.3266 20.7817 15.0195C20.6378 14.7123 20.428 14.4394 20.1666 14.2194L3.94101 0.568572C2.39226 -0.734201 0 0.345909 0 2.34792V29.6534C0 31.6554 2.39226 32.7355 3.94101 31.4289Z"
            fill="#CDA274"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg py-[20px] px-[30px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-[-4px] right-1 text-gray-600 text-3xl"
            >
              &times;
            </button>
            <iframe
              width="1344"
              height="756"
              className="rounded-lg"
              src={isOpen ? "https://www.youtube.com/embed/R_9-JElwV2A" : ""}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
}
