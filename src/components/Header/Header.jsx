import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../components/Logo/Logo";
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
        <nav className="nav flex justify-between">
          <div className="">
            <Logo />
          </div>
          <button
            class="header__burger-btn"
            onClick={() => setIsOpenMenu((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="nav__wrapper flex">
            <ul className="nav__list items-center flex flex-col lg:flex-row justify-center">
              <li className="nav__link text ">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__link text">
                <Link to="/faq">Faq’s</Link>
              </li>
              <li className="nav__link text ">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav__link text ">
                <Link to="/project">Project</Link>
              </li>
              <li className="nav__link text ">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav__link text">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="nav__button hidden lg:block">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M16.6837 17.1844L21.9994 22.5001M19.375 10.6875C19.375 15.7616 15.2616 19.875 10.1875 19.875C5.11338 19.875 1 15.7616 1 10.6875C1 5.61338 5.11338 1.5 10.1875 1.5C15.2616 1.5 19.375 5.61338 19.375 10.6875Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
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
