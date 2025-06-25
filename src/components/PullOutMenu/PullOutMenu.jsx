import React, { useState } from "react";
import arrow from "../../img/people/arrow.svg";
function PullOutMenu({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-dark">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full"
      >
        <p className="subtitle">{title}</p>
        <img
          src={arrow}
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-[-90deg]" : ""
          } rotate-90 w-[10px]`}
          alt=""
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? `max-h-[250px] opacity-100` : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
export default PullOutMenu;
