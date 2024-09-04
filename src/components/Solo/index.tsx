import Image4 from "../../assets/Vis.png";
import { Button } from "../Button";
const Vision = () => {
  return (
    <div className=" mt-[196px]">
      {/* <div className="bg-Section-Bg flex flex-row mx-[72px] rounded-[24px] py-[48px] px-[24px] ">
        <div className="  h-[594px] relative right-28">
          <img src={Image4} className=" w-[80%]" />
        </div>
        <div className="flex flex-col justify-center border border-red-300 relative">
          <p className="font-figtree font-[900] text-f48">
            More than just ticketing.
          </p>
          <p>
            Create your event on ChekPass in just minutes and seamlessly manage
            attendees, from sales to check-in, all on your mobile phone while
            effortlessly collecting payments.
          </p>
          <div>
            <Button variant="primary" label="Coming soon..." />
          </div>
        </div>
      </div> */}
      <div className="mt-[76px] mx-[72px] flex flex-row pl-[72px] bg-Section-Bg ">
        <img
          src={Image4}
          className="  h-[500px] w-[60%] object-cover relative right-32"
        />
        <div className="flex flex-col justify-center w-[75%]">
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
      </div>
    </div>
  );
};

export default Vision;
