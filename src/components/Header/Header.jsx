import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../components/Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const toggleMenu = () => setIsOpenMobileMenu((prev) => !prev);

  const clickOnLink = () => {
    console.log("fff");
  };
  return (
    <div className="header">
      <div className="container">
        <nav className="nav py-[12px] md:py-[32px] xl:py-[44px] flex justify-between">
          <div className="">
            <Logo />
          </div>
          <div className="block lg:hidden">
            <MobileMenu
              isOpenMobileMenu={isOpenMobileMenu}
              toggleMenu={toggleMenu}
            />
          </div>
          <div className="hidden lg:block">
            <Navigation clickOnLink={clickOnLink} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
