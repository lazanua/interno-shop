import "./index.scss";
import { Link } from "react-router-dom";
const Title = ({ title, img, subtitle }) => {
  return (
    <section
      className="title__wrapper mb-[60px] md:mb-[80px]
      xl:mb-[120px] lg:mb-[200px] flex justify-center lg:h-[312px] md:h-[264px] h-[206px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="title__content py-[24px] xl:w-[438px] lg:w-[418px] md:w-[418px] sm:w-[332px] w-[250px] xs:w-[280px]
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
