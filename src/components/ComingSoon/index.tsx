import PhoneLogo from "../../assets/Phone logo.png";
// import Emoji from "../../assets/Emoji1.png";

const ComingSoon = () => {
  return (
    <div className="bg-gradient-to-t from-header-color to-white h-[1380px] w-full flex flex-row items-center justify-center">
      <div className=" flex flex-row justify-between px-[72px]">
        <div className=" w-[100%] flex flex-col">
          <p className=" text-f96 font-figtree font-[900]">ChekPass</p>

          <p className=" text-f96 font-figtree text-c-red font-[900]">
            mobile app
            <span></span>
          </p>

          <p className=" text-f96 font-figtree font-[900]">Coming soon.</p>
        </div>
        <div className=" w-[100%]">
          <img src={PhoneLogo} className=" " />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
