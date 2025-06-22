import facebook from "../../img/footer/facebook.svg";
import twitter from "../../img/footer/twitter.svg";
import linkedin from "../../img/footer/linkedin.svg";
import "./index.scss";
import { motion } from "framer-motion";
import { animationsTop } from "../../data/animations";
const Person = ({ name, job, id, hasLinkedIn, clickOnPerson, custom, img }) => {
  return (
    <motion.div
      className="person w-fit xl:w-[283px]"
      onClick={() => clickOnPerson(id)}
      variants={animationsTop}
      custom={custom}
    >
      <div className="person text-center">
        <div className="person__img">
          <img
            className="h-[200px] xs:h-[230px] sm:h-[360px] md:h-[270px] lg:h-[360px] rounded-[24px] xl:h-[433px] lg:rounded-[30px]"
            src={img}
            alt=""
          />
        </div>
        <div
          className="person__name  mt-[17px] text-[18px] sm:text-[22px]"
          style={{ fontFamily: "var(--title)" }}
        >
          {name}
        </div>
        <div className="p-[8px]">
          <div className="person__info text">{job}</div>
          <div className="person__socials mt-[16px] flex gap-[37px] justify-center">
            <a className="person__social social">
              <img src={facebook} alt="" />
            </a>
            <a className="person__social social">
              <img src={twitter} alt="" />
            </a>
            {hasLinkedIn && (
              <a className="person__social  social">
                <img src={linkedin} alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Person;
