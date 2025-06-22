import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../components/Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  const [input, setInput] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function showSearch() {
    setInput((prevState) => !prevState);
    console.log(input);
  }

  return (
    <div className={`header ${isOpenMenu ? "open" : ""}`}>
      <div className="container">
        <nav className="nav py-[12px] md:py-[32px] xl:py-[44px] flex justify-between">
          <div className="">
            <Logo />
          </div>
          <div className="block lg:hidden">
            <MobileMenu />
          </div>

          {/* <button
            class="header__burger-btn"
            onClick={() => setIsOpenMenu((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button> */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* <div className={`nav__input ${input ? "" : "nav__input--none"}`}>
            <input type="text" />
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
