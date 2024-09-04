import { Link } from "react-router-dom";
import { ButtonProps } from "../../Types";
import { useNavigate } from "react-router-dom";

export const Button = ({ label, to, Click, variant, icon }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof Click === "function") {
      Click();
    } else if (typeof Click === "string") {
      navigate(Click);
    }
  };

  let buttonClasses = " w-full h-[46px] rounded-[4px] font-lato text-[16px] ";

  let textColorClass = "";
  let isDisabled = false;
  switch (variant) {
    case "primary":
      textColorClass = "text-c-red";
      buttonClasses += " bg-btn-color  font-[800]";
      break;

    default:
      textColorClass = "text-white";
      buttonClasses += " bg-c-red";
      break;
  }

  return (
    <div>
      <button
        type="submit"
        className={`${buttonClasses} ${textColorClass} flex flex-row gap-[9.75px] px-[26px]  py-[20px] justify-center items-center`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {to ? (
          <Link to={to} className={textColorClass}>
            {label}
          </Link>
        ) : (
          <span className={textColorClass}>{label} </span>
        )}
        {icon && (
          <img src={icon} className="w-[15px] h-[12px] " alt="Plus Icon" />
        )}
      </button>
    </div>
  );
};
