import Menu from "../components/menu";
import { Button } from "../components/Button";
import HeaderImage from "../assets/frame1.png";
import Frame2 from "../assets/Frame2.png";

//SECTIONS
import About from "../components/About";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-header-color to-white h-[1380px] w-full ">
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
      <div className="mt-[76px] flex flex-row pl-[72px] ">
        <div className="flex flex-col justify-center w-[55%]">
          <p className="font-figtree text-f64 font-[900] tracking-tight">
            An amazing experience right from ticketing!
          </p>
          <div className=" mt-[40px]">
            <div className=" flex flex-row gap-[10px]">
              <div className="bg-black h-2 w-2 rounded mt-1"></div>
              <p>
                Effortlessly secure your spot and enjoy a smooth check-in
                without any wait or delay.
              </p>
            </div>
            <div className=" flex flex-row gap-[10px] mt-2">
              <div className="bg-black h-2 w-2 rounded mt-1"></div>
              <p>
                Easily access detailed event information without any hassle.
              </p>
            </div>
          </div>
        </div>

        <img src={Frame2} className="  h-[500px] w-[70%] object-cover" />
      </div>
      <About />
    </div>
  );
};

export default Home;
