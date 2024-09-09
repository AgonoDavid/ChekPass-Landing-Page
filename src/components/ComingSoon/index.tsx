import PhoneLogo from "../../assets/Phone logo.png";
import Emoji from "../../assets/Emoji1.png";

const ComingSoon = () => {
  return (
    <div className="bg-gradient-to-t from-header-color to-white h-[1380px] w-full ">
      <div className=" pl-[96px]">
        <p className=" font-figtree font-[900] text-f32 tracking-tight leading-[32px]">
          Got more questions? Send us a mail via:{" "}
        </p>
        <p className=" font-figtree font-[900] text-f32 text-c-red tracking-tight leading-[32px]">
          info@chekpass.com
        </p>
      </div>
      <div className=" flex flex-row items-center justify-center mt-[475px]">
        <div className=" flex flex-row justify-between px-[72px]">
          <div className=" w-[60%] flex flex-col justify-center relative bottom-32 ">
            <div>
              <p className=" text-f96 font-figtree font-[900]">ChekPass</p>
            </div>
            <div className=" mt-[-20px] mb-[-20px] ">
              <div className=" flex flex-row items-center w-[100%] ">
                <p className=" text-f96 font-figtree text-c-red font-[900]">
                  mobile app
                </p>
                <img src={Emoji} className=" w-[144px] h-[144px]" />
              </div>
            </div>
            <div>
              <p className=" text-f96 font-figtree font-[900]">coming soon.</p>
            </div>
          </div>
          <div className="w-[50%] justify-end flex flex-row h-[757px]">
            <img
              src={PhoneLogo}
              className="w-[100%] scale-[1.2] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
