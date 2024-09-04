import Image4 from "../../assets/Vis.png";
import { Button } from "../Button";
const Vision = () => {
  return (
    <div className=" mt-[196px]">
      <div className="bg-Section-Bg flex flex-row mx-[72px] rounded-[24px] py-[48px] px-[24px] ">
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
      </div>
    </div>
  );
};

export default Vision;
