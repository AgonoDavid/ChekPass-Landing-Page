import Frame2 from "../../assets/newXPimage.png";

const TicketExperience = () => {
  return (
    <div className="lg:mt-[76px] flex flex-col gap-y-8 lg:flex-row lg:pl-[72px] ">
      <div className="flex flex-col justify-center w-[96%] mx-auto  lg:w-[55%]">
        <p className="font-figtree text-lg lg:text-f64 font-[900] tracking-tight text-center lg:text-left w-4/5 lg:w-full mx-auto">
          An amazing experience right from ticketing!
        </p>
        <div className="mt-[10px] lg:mt-[40px]">
          <div className=" flex flex-row -gap-x-2 lg:gap-[10px]">
            <div className="bg-black h-2 w-2 rounded mt-1 ml-1"></div>
            <p className={`text-sm text-center lg:text-base`}>
              Effortlessly secure your spot and enjoy a smooth check-in without
              any wait or delay.
            </p>
          </div>
          <div className=" flex flex-row gap-x-2 lg:gap-[10px] mt-2">
            <div className="bg-black h-2 w-2 rounded mt-1 ml-1"></div>
            <p className={`text-sm text-center lg:text-base`}>Easily access detailed event information without any hassle.</p>
          </div>
        </div>
      </div>
      <div className="=w-11/12 lg:w-[80%] justify-end flex flex-row ">
        <img
          src={Frame2}
          className="w-[100%] object-contain duration-500"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TicketExperience;
