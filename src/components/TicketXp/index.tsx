import Frame2 from "../../assets/newXPimage.png";

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
      <div className="w-[100%] justify-end flex flex-row h-[757px]">
        <img
          src={Frame2}
          className="w-[100%] scale-[1] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TicketExperience;
