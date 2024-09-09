import Menu from "../components/menu";
import { Button } from "../components/Button";
import HeaderImage from "../assets/newheader.png";
//SECTIONS
import TicketExperience from "../components/TicketXp";
import About from "../components/About";
import Vision from "../components/Vision";
import FAQ from "../components/FAQ";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" bg-gradient-to-b from-header-color to-white h-[1380px] w-full ">
      <div className=" pt-[40px]">
        <Menu />
      </div>
      <div className="mt-[120px] flex flex-col items-center justify-center text-center">
        <div>
          <p className="font-[900] font-figtree text-f64 leading-[64px] tracking-tight">
            Your Gateway to Experiences🚀
          </p>
          <p className=" mt-[24px] leading-6 text-f18">
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
      <div className="mt-[111px] mb-[163px]">
        <img src={HeaderImage} />
      </div>
      <TicketExperience />
      <About />
      <Vision />
      <FAQ />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default Home;
