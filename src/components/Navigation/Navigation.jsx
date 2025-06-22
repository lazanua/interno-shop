import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="nav__wrapper flex">
      <ul className="nav__list gap-x-[50px] mb-[24px] lg:mb-0  ml-[20px] lg:ml-0 gap-y-[24px]  lg:flex-row flex-col flex ">
        <li className="nav__link text">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link text">
          <Link to="/about">About</Link>
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
  );
};

export default Navigation;
