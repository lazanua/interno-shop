import bg from "../../img/pages/page404/bg.jpg";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div className="page404 mb-[200px]">
      <div className="container">
        <div className="page404__wrapper flex justify-between items-center text-center lg:text-left">
          <div className="page404__content">
            <div className="title light-text text-[200px] leading-[1.25] lg:text-[250px]">
              404
            </div>
            <div className="flex justify-center xl:justify-start">
              <div className="title font-[35px] mb-[23px] text-[35px] xl:text-[50px] w-[80%] xl:w-[100%] ">
                <p> We are sorry, but the page you requested was not found</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="button w-[253px]">
                <Link to="/">
                  <span className="--after-arow">Back To Home</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="page404__img hidden lg:block">
            <img className="rounded-bl-[353px]" src={bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
