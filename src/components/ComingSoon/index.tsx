import PhoneLogo from "../../assets/newPhone.png";
import Emoji from "../../assets/Emoji1.png";

const ComingSoon = () => {
  return (
    <div className="bg-gradient-to-t from-header-color to-white lg:h-[1380px] w-full ">
      <div className="lg:pl-12 w-11/12 mx-auto">
        <p className=" font-figtree font-[900] text-lg lg:text-f32 tracking-tight leading-[32px]">
          Got more questions? Send us a mail via:{" "}
        </p>
        <p className=" font-figtree font-[900] text-lg lg:text-f32 text-c-red tracking-tight leading-[32px]">
          info@chekpass.com
        </p>
      </div>
      <div className=" flex flex-row items-center justify-center mt-48 lg:mt-[475px]">
        <div className=" flex flex-col lg:flex-row justify-between lg:px-[72px]">
          <div className="w-full mx-auto lg:w-[60%] flex flex-col justify-center relative bottom-32 ">
            <div>
              <p className="text-5xl lg:text-f96 font-figtree font-[900] text-center lg:text-left">ChekPass</p>
            </div>
            <div className=" lg:mt-[-20px] lg:mb-[-20px] ">
              <div className=" flex flex-row items-center justify-center lg:justify-start w-[100%]">
                <p className=" text-5xl lg:text-f96 font-figtree text-c-red font-[900]">
                  mobile app
                </p>
                <img src={Emoji} className="size-12 lg:size-[144px]" />
              </div>
            </div>
            <div>
              <p className=" lg:text-f96 font-figtree font-[900] text-center lg:text-left">coming soon.</p>
            </div>
          </div>
          <div className="w-11/12 mx-auto lg:w-[45%] justify-end flex flex-row lg:h-[757px]">
            <img
              src={PhoneLogo}
              className="w-[100%] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
