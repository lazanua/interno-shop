import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Можно заменить на любой иконки
import Navigation from "../Navigation/Navigation";
import PullOutMenu from "../PullOutMenu/PullOutMenu";
import facebook from "./../../img/footer/facebook.svg";
import twitter from "./../../img/footer/twitter.svg";
import linkedin from "./../../img/footer/linkedin.svg";
import insta from "./../../img/footer/insta.svg";
const MobileMenu = ({ isOpenMobileMenu, toggleMenu }) => {
  return (
    <div className="">
      <button
        className="fixed top-4 right-4 z-50 p-2   rounded md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpenMobileMenu ? (
          <X className="z-40" size={30} />
        ) : (
          <Menu size={30} />
        )}
      </button>
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-500 z-20 ${
          isOpenMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 left-0 w-full p-[20px] bg-light shadow-md z-30 transform transition-transform duration-300 md:hidden ${
          isOpenMobileMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="subtitle mb-[20px]">Pages</p>
        <Navigation />
        <div className="flex flex-col gap-[20px]">
          <PullOutMenu title="Contacts">
            <ul className="text flex flex-col gap-[16px] mt-[24px] text-dark">
              <li>55 East Birchwood Ave. Brooklyn, New York 11201</li>
              <li>contact@interno.com</li>
              <li>(123) 456 - 7890</li>
            </ul>
          </PullOutMenu>
          <PullOutMenu title="Services">
            <ul className="text flex flex-col gap-[16px] mt-[24px] text-dark">
              <li>Kitchan</li>
              <li>Living Area</li>
              <li>Bathroom</li>
              <li>Dinning Hall</li>
              <li>Bedroom</li>
            </ul>
          </PullOutMenu>
          <div className="flex gap-[24px] items-center">
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
      </div>
    </div>
  );
};

export default MobileMenu;
