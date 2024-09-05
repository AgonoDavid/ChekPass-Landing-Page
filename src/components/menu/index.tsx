import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.png";
import { Button } from "../Button";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [barPosition, setBarPosition] = useState({ left: 0, width: 0 });

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (itemRefs.current[activeItem]) {
      const { offsetLeft, offsetWidth } = itemRefs.current[activeItem];
      setBarPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeItem]);

  return (
    <div className="relative mx-[72px] bg-white h-[104px] flex items-center rounded-[12px] border shadow border-c-grey px-[24px]">
      <div
        className="absolute top-0 h-[3px]  bg-black transition-all duration-300"
        style={{ left: barPosition.left, width: barPosition.width }}
      ></div>

      <div>
        <img src={Logo} className="w-[155px] h-[40px]" alt="Logo" />
      </div>

      <div className="flex flex-1 justify-center  space-x-8">
        {["Home", "FAQs", "Contact"].map((item) => (
          <div
            key={item}
            className="relative cursor-pointer px-[44px] py-[40px]"
            onClick={() => setActiveItem(item)}
            ref={(el) => (itemRefs.current[item] = el)}
          >
            <span className=" font-[900] text-f20 font-lato leading-[24px]">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div>
        <Button variant="primary" label="Coming soon..." />
      </div>
    </div>
  );
};

export default Menu;
