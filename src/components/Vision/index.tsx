import Image4 from "../../assets/newVision.png";
import { Button } from "../Button";
const Vision = () => {
  return (
    <div className=" mt-[196px] ">
      <div className="bg-Section-Bg flex-col gap-y-12 flex lg:flex-row lg:mx-[72px] items-center lg:rounded-[24px] px-[24px] h-[540px] lg:h-[570px] py-[24px]">
        <div className="w-[100%] mt-12 lg:mt-0">
          <img
            src={Image4}
            className="w-[100%] relative lg:right-10 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center w-[100%]">
          <p className="font-figtree font-[900] text-xl lg:text-f48 w-[100%]">
            More than just ticketing.
          </p>
          <p className="mt-[16px] lg:leading-[27px] text-xs">
            Create your event on ChekPass in just minutes and seamlessly manage
            attendees, from sales to check-in, all on your mobile phone while
            effortlessly collecting payments.
          </p>
          <div className="mt-[32px]">
            <Button variant="primary" label="Coming soon..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
