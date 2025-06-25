import { Link } from "react-router-dom";
const Navigation = ({ clickOnLink }) => {
  return (
    <div className="nav__wrapper flex">
      <ul
        className="nav__list text-[20px] text-[var(--dark-color)]
       md:text-[#292f36] gap-x-[50px] mb-[24px] lg:mb-0
       lg:ml-0 gap-y-[24px]  lg:flex-row flex-col flex"
        style={{ fontFamily: "var(--text)" }}
      >
        <li className="nav__link">
          <button onClick={() => clickOnLink()}>Home</button>
        </li>
        <li className="nav__link">
          <button onClick={() => clickOnLink()}>About</button>
        </li>
        <li className="nav__link">
          <Link to="/faq">Faq’s</Link>
        </li>
        <li className="nav__link">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav__link">
          <Link to="/project">Project</Link>
        </li>
        <li className="nav__link">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="nav__link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-link md:hidden block">
          <a to="/pricing">Pricing</a>
        </li>
      </ul>

      <button className="nav__button ml-[31px] hidden lg:block">
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
