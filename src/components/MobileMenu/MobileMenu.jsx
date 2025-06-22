import { useState } from "react";
import { Menu, X } from "lucide-react"; // Можно заменить на любой иконки
import Navigation from "../Navigation/Navigation";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Кнопка открытия */}
      <button
        className="fixed top-4 right-4 z-50 p-2  text-[var(--dark)] rounded md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="z-40" size={30} /> : <Menu size={30} />}
      </button>
      {/* Затемнение фона */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-500 z-20 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      {/* Меню */}
      <div
        className={`fixed top-0 left-0 w-full bg-light shadow-md z-30 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navigation />
      </div>
    </>
  );
};

export default MobileMenu;
