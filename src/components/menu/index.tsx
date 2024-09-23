import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Logo from "../../assets/logo.png";
import Hamburger from "../../assets/hamburger.svg";
import { Button } from "../Button";

interface MenuProps {
  handleScrollTo: (section: string) => void;
}

const Menu: React.FC<MenuProps> = ({ handleScrollTo }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [barPosition, setBarPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Constant to check if the window width is <= 768px
  const isMobile = window.innerWidth <= 768;

  // Track scroll to change background color
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (itemRefs.current[activeItem]) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = itemRefs.current[activeItem];
      setBarPosition({ top: offsetTop, left: offsetLeft, width: offsetWidth, height: offsetHeight });
    }
  }, [activeItem]);

  const handleClick = (item: string) => {
    setActiveItem(item);
    handleScrollTo(item);
    // setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div
          className={`fixed top-10 lg:right-0 bg-grey-bg w-11/12 lg:left-0 lg:transform-0 lg:-translate-x-0 left-1/2 transform -translate-x-1/2 md:w-[calc(100%-144px)] md:h-[104px] border border-white flex flex-col md:flex-row items-center justify-between transition-colors z-50 duration-500 rounded-lg max-w-[1520px] mx-auto ${
              isScrolled
                  ? "bg-white lg:bg-opacity-50 lg:backdrop-filter lg:backdrop-blur"
                  : "bg-white"
          } shadow px-4 md:px-[24px] border border-white md:mx-[72px] md:top-[40px] md:rounded-[12px]`}
      >
        <div
            className={`absolute ${
                isMobile ? "left-0 w-1 h-[2px]" : "top-0 h-[3px]"
            } ${isMenuOpen ? "block" : "max-md:hidden"} bg-black transition-all duration-300`}
            style={isMobile ? { top: barPosition.top, height: barPosition.height } : { left: barPosition.left, width: barPosition.width }}
        ></div>

        <div className="w-full lg:w-auto max-w-[1200px] py-4 md:py-0 flex justify-between items-center">
          <div>
            <img src={Logo} className="w-[155px] h-[40px]" alt="Logo" />
          </div>

          <div className="md:hidden">
            <img src={Hamburger} alt="hamburger menu" className="cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>

        <div className={`w-full md:flex md:flex-1 md:justify-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:space-x-8">
            {["Home", "FAQs", "Contact"].map((item) => (
                <div
                    key={item}
                    className="relative cursor-pointer px-4 py-2 md:px-[44px] md:py-[40px]"
                    onClick={() => handleClick(item)}
                    ref={(el) => (itemRefs.current[item] = el)}
                >
              <span className="font-[900] text-f20 font-lato leading-[24px]">
                {item}
              </span>
                </div>
            ))}
          </div>
        </div>

        <div className={`w-full md:w-auto py-4 md:py-0 hidden lg:block`}>
          <Button variant="primary" label="Coming soon..." />
        </div>
      </div>
  );
};

export default Menu;
