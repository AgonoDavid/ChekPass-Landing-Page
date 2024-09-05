import Image4 from "../../assets/Vis.png";
import { Button } from "../Button";
const Vision = () => {
  return (
    <div className=" mt-[196px]">
      <div className="bg-Section-Bg flex flex-row mx-[72px] rounded-[24px] py-[48px] px-[24px] ">
        <div className="    w-[90%]">
          <img src={Image4} className=" w-[100%] relative object-contain" />
        </div>
        <div className="flex flex-col justify-center w-[100%] ">
          <p className="font-figtree font-[900] text-f48 w-[100%]">
            More than just ticketing.
          </p>
          <p className=" mt-[16px] leading-[27px]">
            Create your event on ChekPass in just minutes and seamlessly manage
            attendees, from sales to check-in, all on your mobile phone while
            effortlessly collecting payments.
          </p>
          <div className=" mt-[32px]">
            <Button variant="primary" label="Coming soon..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
