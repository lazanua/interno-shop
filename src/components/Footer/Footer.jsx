import { NavLink, Link } from "react-router-dom";
import "./index.scss";
import facebook from "./../../img/footer/facebook.svg";
import twitter from "./../../img/footer/twitter.svg";
import linkedin from "./../../img/footer/linkedin.svg";
import insta from "./../../img/footer/insta.svg";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row md:flex hidden flex-col lg:flex-row items-start lg:items-start gap-x-[101px] gap-y-[20px]">
          <div className="footer__item flex flex-col items-center lg:block w-[100%] lg:w-[auto]">
            <Logo />
            <div className="footer__text text mt-[26px] lg:max-w-[393px]">
              <p>
                It is a long established fact that a reader will be distracted
                lookings.
              </p>
            </div>
            <div className="footer__socials flex gap-[54px] lg:gap-[26px] sm:gap-[54px]">
              <div className="footer__social">
                <img src={facebook} alt="" />
              </div>
              <div className="footer__social">
                <img src={twitter} alt="" />
              </div>
              <div className="footer__social">
                <img src={linkedin} alt="" />
              </div>
              <div className="footer__social">
                <img src={insta} alt="" />
              </div>
            </div>
          </div>
          <div className="contents">
            <div className="footer__item  w-[100%] lg:w-auto">
              <div className="footer__title subtitle text-center lg:text-start">
                Pages
              </div>
              <div className="footer__links min-w-[125px] flex flex-row gap-x-[20px] justify-center lg:justify-between lg:flex-col">
                <NavLink to="/about" className="footer__link text">
                  About Us
                </NavLink>
                <div className="footer__link text">
                  <a href=""></a>Our Projects
                </div>
                <div className="footer__link text">
                  <Link to="/team">Our Team</Link>
                </div>
                <div className="footer__link text">
                  <Link to="/contact">Contact Us</Link>
                </div>
                <div className="footer__link text">
                  <Link to="/services">Services</Link>
                </div>
              </div>
            </div>
            <div className="footer__item  w-[100%] lg:w-auto">
              <div className="footer__title subtitle text-center lg:text-start">
                Services
              </div>
              <div className="footer__links min-w-[120px] flex flex-row lg:flex-col justify-center gap-x-[20px] lg:justify-between">
                <a href="" className="footer__link text">
                  Kitchan
                </a>
                <a href="" className="footer__link text">
                  Living Area
                </a>
                <a href="" className="footer__link text">
                  Bathroom
                </a>
                <a href="" className="footer__link text">
                  Dinnig Hall
                </a>
                <a className="footer__link text">Bedroom</a>
              </div>
            </div>
          </div>

          <div className="footer__item w-[100%] lg:w-[258px]">
            <div className="footer__title subtitle mb-[6px] text-center lg:text-start">
              Contact
            </div>
            <div className="footer__links min-w-[258px] flex flex-col items-center lg:items-start">
              <div className="">
                <a className="footer__link text leading-normal">
                  55 East Birchwood Ave. Brooklyn, New York 11201
                </a>
              </div>
              <div className="">
                <a className="footer__link text">contact@interno.com</a>
              </div>
              <div className="">
                <a className="footer__link text">(123) 456 - 7890</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__footer text text-center lg:mt-[174px] mt-[35px] pb-[20px] lg:pb-[46px]">
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </div>
      </div>
    </footer>
  );
};

export default Footer;
