import "./index.scss";
import { Link } from "react-router-dom";
const Title = ({ title, img, subtitle }) => {
  return (
    <section
      className="title__wrapper flex justify-center lg:h-[312px] md:h-[264px] h-[206px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="title__content py-[24px] xl-w-[438px] lg:w-[418px] md:w-[418px] w-[332px]
      lg:py-[41px] md:py-[28px]"
      >
        <h1 className="title__title title">{title}</h1>
        <div className="title__subtitle text">
          <Link to="/">Home</Link> / {subtitle}
        </div>
      </div>
    </section>
  );
};

export default Title;
