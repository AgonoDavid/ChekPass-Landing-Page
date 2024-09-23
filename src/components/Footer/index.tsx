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
    <div className="bg-[#141414] text-white overflow-x-hidden">
      <div className="w-full  lg:w-[90%] mx-auto flex flex-col gap-y-10 lg:flex-row justify-between py-[83px]">
        <div className="w-4/5 ml-[4%] lg:ml-0 lg:w-[50%]">
          <img src={Logo} className=" w-[40%]" />
        </div>

        <div className="w-[95%] mx-auto lg:w-[50%] flex flex-row justify-between ">
          {/* Company Links */}
          <div>
            <h2 className=" font-figtree text-f20 lg:text-f24 leading-[28.8px] font-[900]">
              Company
            </h2>
            <ul className="mt-4 lg:mt-[40px] space-y-[10px] lg:space-y-[20px]">
              {Company.map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={item.Link}
                    className=" text-white text-f14 lg:text-f18 font-[700] leading-[32.4px] font-lato "
                  >
                    {item.Name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="mr-5">
            <h2 className=" font-figtree text-f20 lg:text-f24 leading-[28.8px] font-[900]">
              Legal
            </h2>
            <ul className="mt-4 lg:mt-[40px] space-y-[10px] lg:space-y-[20px]">
              {Legal.map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={item.Link}
                    className=" text-white text-f14 lg:text-f18 font-[700] leading-[32.4px] font-lato "
                  >
                    {item.Name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-fit">
            <h2 className=" font-figtree text-f20 lg:text-f24 leading-[28.8px] font-[900]">
              Contact Us
            </h2>
            <ul className="mt-4 lg:mt-[40px] space-y-[10px] lg:space-y-[20px]">
              {Contact.map((item, index) => (
                <li key={index} className="mb-2">
                  <span className=" text-white text-f14 lg:text-f18 font-[700] leading-[32.4px] font-lato ">
                    {item.Name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="w-4/5 flex flex-row justify-between mt-[24px] cursor-pointer">
              <div className="w-1/4">
                <img src={LinkedInLogo} className="w-[60%]" />
              </div>
              <div className="w-1/4">
                <img src={TwitterLogo} className="w-[60%]" />
              </div>
              <div className="w-1/4">
                <img src={InstagramLogo} className="w-[60%]" />
              </div>
              <div className="w-1/4">
                <img src={FacebookLogo} className="w-[60%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
