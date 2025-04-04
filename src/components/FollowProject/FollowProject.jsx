import ButtonCircle from "../ButtonCircle/Button";
import { animationsLeft, animationsRight } from "../../data/animations";
import { motion } from "framer-motion";
import "./index.scss";
const FollowProject = ({ img, name, category, animation, custom }) => {
  return (
    <motion.div
      className="follow__project"
      variants={animation === "left" ? animationsLeft : animationsRight}
      custom={custom}
    >
      <div className="follow__img">
        <img src={img} alt="" />
      </div>
      <div className="follow__content">
        <div className="follow__info">
          <div className="follow__name subtitle">{name}</div>
          <div className="follow__category">{category}</div>
        </div>

        <ButtonCircle></ButtonCircle>
      </div>
    </motion.div>
  );
};

export default FollowProject;
