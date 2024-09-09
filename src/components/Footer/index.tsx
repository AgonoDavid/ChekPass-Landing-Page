import Logo from "../../assets/whitelogo.png";
import LinkedInLogo from "../../assets/linkedIn.png";
import FacebookLogo from "../../assets/Facebook.png";
import InstagramLogo from "../../assets/instagram.png";
import TwitterLogo from "../../assets/TwitterLogo.png";

const Company = [
  {
    Name: "Home",
    Link: "#",
  },
  {
    Name: "FAQs",
    Link: "#",
  },
  {
    Name: "Contact Us",
    Link: "#",
  },
];

const Legal = [
  {
    Name: "Term of use",
    Link: "#",
  },
  {
    Name: "Privacy policy",
    Link: "#",
  },
  {
    Name: "Refund policy",
    Link: "#",
  },
];

const Contact = [
  {
    Name: "info@chekpass.com",
  },
  {
    Name: "+234 8141370086",
  },
  {
    Name: "+234 7030963718",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#141414] text-white">
      <div className="max-w-7xl flex flex-row justify-between mx-auto py-[83px] ">
        <div className=" w-[50%]">
          <img src={Logo} className=" w-[40%]" />
        </div>

        <div className=" w-[50%] flex flex-row justify-between  ">
          {/* Company Links */}
          <div>
            <h2 className=" font-figtree text-f24 leading-[28.8px] font-[900]">
              Company
            </h2>
            <ul className=" mt-[40px] space-y-[20px]">
              {Company.map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={item.Link}
                    className=" text-white text-f18 font-[700] leading-[32.4px] font-lato "
                  >
                    {item.Name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="">
            <h2 className=" font-figtree text-f24 leading-[28.8px] font-[900]">
              Legal
            </h2>
            <ul className=" mt-[40px] space-y-[20px]">
              {Legal.map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={item.Link}
                    className=" text-white text-f18 font-[700] leading-[32.4px] font-lato "
                  >
                    {item.Name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <h2 className=" font-figtree text-f24 leading-[28.8px] font-[900]">
              Contact
            </h2>
            <ul className=" mt-[40px] space-y-[20px]">
              {Contact.map((item, index) => (
                <li key={index} className="mb-2">
                  <span className=" text-white text-f18 font-[700] leading-[32.4px] font-lato ">
                    {item.Name}
                  </span>
                </li>
              ))}
            </ul>
            <div className=" flex flex-row justify-between mt-[24px] cursor-pointer">
              <div className=" w-[25%]">
                <img src={LinkedInLogo} className=" w-[60%]" />
              </div>
              <div className=" w-[25%]">
                <img src={TwitterLogo} className=" w-[60%]" />
              </div>
              <div className=" w-[25%]">
                <img src={InstagramLogo} className=" w-[60%]" />
              </div>
              <div className=" w-[25%]">
                <img src={FacebookLogo} className=" w-[60%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
