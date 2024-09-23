import Menu from "../components/menu";
import { Button } from "../components/Button";
import HeaderImage from "../assets/newheader.png";
import BannerMobile from "../assets/banner-mobile.svg";
import Rocket from "../assets/rocket.png";
import { useRef } from "react";
//SECTIONS
import TicketExperience from "../components/TicketXp";
import About from "../components/About";
import Vision from "../components/Vision";
import FAQ from "../components/FAQ";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";

const Home = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Scroll handler function
  const handleScrollTo = (section: string) => {
    switch (section) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "FAQs":
        faqRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div
      className=" bg-gradient-to-b from-header-color to-white lg:h-[1380px] w-full max-w-[1520px] mx-auto"
      ref={homeRef}
    >
      <div className=" pt-[120px]">
        <Menu handleScrollTo={handleScrollTo} />
      </div>
      <div className="mt-[120px] flex flex-col items-center justify-center text-center">
        <div>
          <p className="font-[900] w-11/12 text-center flex flex-wrap justify-center gap-x-3 mx-auto font-figtree text-f32 lg:text-f64 lg:leading-[64px] tracking-tight">
            Your Gateway to <span className={`flex justify-center text-center`}>Experiences<img src={Rocket} className={`lg:-scale[1.2]`} /></span>
          </p>
          <p className="max-md:w-[95%] mx-auto mt-[24px] leading-6 text-f18">
            ChekPass is a gateway to experiences in Africa and beyond. Buy and
            sell tickets seamlessly, manage guests and attendees digitally.
            <br />
            Create and manage access to your space from your fingertips.
          </p>
        </div>
        <div className=" mt-[40px] w-[240px]">
          <Button label="Coming soon..." variant="primary" />
        </div>
      </div>
      <div className="mt-[111px] mb-[100px] lg:mb-[163px] w-full ">
        <img src={HeaderImage} alt="Header Image" loading="lazy" className={`object-cover w-full hidden lg:block`} />
        <img src={BannerMobile} alt={`Banner-mobile-image`} className={`lg:hidden`}/>
      </div>

      {/* TicketExperience Section */}
      <TicketExperience />

      {/* About Section */}
      <About />

      {/* Vision Section */}
      <Vision />

      {/* FAQs Section */}
      <div ref={faqRef}>
        <FAQ />
      </div>

      {/* Coming soon Section */}
      <div>
        <ComingSoon />
      </div>

      {/* Footer */}
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
