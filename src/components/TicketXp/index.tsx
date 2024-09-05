import Frame2 from "../../assets/Frame2.png";

const TicketExperience = () => {
  return (
    <div className="mt-[76px] flex flex-row pl-[72px] ">
      <div className="flex flex-col justify-center w-[55%]">
        <p className="font-figtree text-f64 font-[900] tracking-tight">
          An amazing experience right from ticketing!
        </p>
        <div className=" mt-[40px]">
          <div className=" flex flex-row gap-[10px]">
            <div className="bg-black h-2 w-2 rounded mt-1"></div>
            <p>
              Effortlessly secure your spot and enjoy a smooth check-in without
              any wait or delay.
            </p>
          </div>
          <div className=" flex flex-row gap-[10px] mt-2">
            <div className="bg-black h-2 w-2 rounded mt-1"></div>
            <p>Easily access detailed event information without any hassle.</p>
          </div>
        </div>
      </div>

      <img src={Frame2} className="  h-[500px] w-[55%] object-contain " />
    </div>
  );
};

export default TicketExperience;
