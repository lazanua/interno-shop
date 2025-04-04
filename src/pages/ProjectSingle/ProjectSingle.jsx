import { useState, useEffect } from "react";
import "./index.scss";
import Modal from "../../components/Modal/Modal";
import bg from "../../img/pages/project-single/bg.jpg";
import { motion } from "framer-motion";
import { animationsLeft, animationsRight } from "../../data/animations";
const ProjectSingle = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="project-single text">
      <div className="project-single__bg mb-[200px]">
        <img alt="" />
      </div>
      <div className="container">
        <motion.div className="project-single__row flex items-center gap-[42px] mb-[100px]">
          <div className="project-single__info bg-light rounded-[70px] py-[55px] px-[84px]">
            <div className="flex justify-between w-[332px]">
              <div className="project-single__subtitle mb-[16px]">Client</div>
              <div className="project-single__info-text">Your client name</div>
            </div>
            <div className="flex justify-between w-[332px]">
              <div className="project-single__subtitle mb-[16px]">Category</div>
              <div className="project-single__info-text">Interiors</div>
            </div>
            <div className="flex justify-between w-[332px]">
              <div className="project-single__subtitle mb-[16px]">Tags</div>
              <div className="project-single__info-text">interior, Home</div>
            </div>
            <div className="flex justify-between w-[332px]">
              <div className="project-single__subtitle mb-[16px]">Date</div>
              <div className="project-single__info-text">23,02, 2022</div>
            </div>
            <div className="flex justify-between w-[332px]">
              <div className="project-single__subtitle mb-[16px]">Link</div>
              <div className="project-single__info-text">example.com</div>
            </div>
          </div>
          <div className="project-single__content">
            <div className="project-single__title title mb-[11px]">
              Minimal Look Bedrooms
            </div>
            <div className="project-single__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin
                tellumassa, vbel maximus purus posuere in. Dojrices gravida
                dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut
                dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                <br />
                <br />
              </p>
              <p>
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras
                amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
                pellentesque arcu. Donec a pellentesque Cras erat enim, gravida
                non ante vitae,elequis convallis elit, in viverra felis. Donec
                ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
                purus porttitor.
              </p>
            </div>
          </div>
        </motion.div>
        <div
          className="project-single__modal-wrapper relative mb-[200px]"
          onClick={openModal}
        >
          <div className="project-single__img">
            <img
              className="rounded-[70px]"
              src="/img/example-project/example.jpg"
              alt=""
            />
          </div>
          <div className="project-single__button w-[132px] h-[132px] flex justify-center items-center">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.4329 33.2861L28.0452 24.8984C30.0646 22.21 31.1547 18.9378 31.151 15.5755C31.151 6.98723 24.1638 0 15.5755 0C6.98723 0 0 6.98723 0 15.5755C0 24.1638 6.98723 31.151 15.5755 31.151C18.9378 31.1547 22.21 30.0646 24.8984 28.0452L33.2861 36.4329C33.7107 36.8125 34.2644 37.0151 34.8337 36.9991C35.403 36.9832 35.9445 36.7499 36.3472 36.3472C36.7499 35.9445 36.9832 35.403 36.9991 34.8337C37.0151 34.2644 36.8125 33.7107 36.4329 33.2861ZM4.45015 15.5755C4.45015 13.3751 5.10264 11.2242 6.32511 9.3946C7.54758 7.56504 9.28513 6.13907 11.318 5.29702C13.3509 4.45496 15.5879 4.23464 17.746 4.66392C19.9041 5.09319 21.8864 6.15278 23.4423 7.70869C24.9983 9.2646 26.0578 11.247 26.4871 13.4051C26.9164 15.5632 26.6961 17.8001 25.854 19.833C25.012 21.8659 23.586 23.6035 21.7564 24.8259C19.9269 26.0484 17.7759 26.7009 15.5755 26.7009C12.626 26.6974 9.79825 25.5241 7.7126 23.4384C5.62696 21.3528 4.45369 18.5251 4.45015 15.5755Z"
                fill="#CDA274"
              />
            </svg>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <img src="./img/example-project/example.jpg" />
        </Modal>
      </div>
    </div>
  );
};

export default ProjectSingle;
