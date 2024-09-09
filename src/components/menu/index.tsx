import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Logo from "../../assets/logo.png";
import { Button } from "../Button";

interface MenuProps {
  handleScrollTo: (section: string) => void;
}

const Menu: React.FC<MenuProps> = ({ handleScrollTo }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [barPosition, setBarPosition] = useState({ left: 0, width: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
      const { offsetLeft, offsetWidth } = itemRefs.current[activeItem];
      setBarPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeItem]);

  const handleClick = (item: string) => {
    setActiveItem(item);
    handleScrollTo(item); // Trigger scroll to the section when menu item is clicked
  };

  return (
    <div
      className={`fixed top-[40px] bg-grey-bg rounded-[12px] border border-white w-[calc(100%-144px)] h-[104px] flex items-center justify-between transition-colors z-50  duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-50 backdrop-filter backdrop-blur"
          : "bg-white"
      } shadow border px-[24px] mx-[72px]`}
    >
      <div
        className="absolute top-0 h-[3px] bg-black transition-all duration-300"
        style={{ left: barPosition.left, width: barPosition.width }}
      ></div>

      <div className="w-full max-w-[1200px] px-[24px] flex justify-between items-center">
        <div>
          <img src={Logo} className="w-[155px] h-[40px]" alt="Logo" />
        </div>

        <div className="flex flex-1 justify-center space-x-8">
          {["Home", "FAQs", "Contact"].map((item) => (
            <div
              key={item}
              className="relative cursor-pointer px-[44px] py-[40px]"
              onClick={() => handleClick(item)}
              ref={(el) => (itemRefs.current[item] = el)}
            >
              <span className="font-[900] text-f20 font-lato leading-[24px]">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div>
          <Button variant="primary" label="Coming soon..." />
        </div>
      </div>
    </div>
  );
};

export default Menu;
