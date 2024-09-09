import Arrow from "../../assets/Circle Arrow.png";
import CorporateEventImg from "../../assets/newCoporate.jpg";
import CareerrEventImg from "../../assets/newCareer.png";
import ArtEventImg from "../../assets/newArt.png";
import ReligiousEventImg from "../../assets/newReligion.png";
const About = () => {
  return (
    <div className=" mt-[264px] mx-[72px]">
      <div className=" flex flex-row justify-between">
        <div>
          <p className=" text-f48 font-[900] font-figtree">
            With ChekPass, you can
            <br /> create events for:
          </p>
        </div>
        <div className=" flex flex-row gap-2 items-center">
          <p className=" cursor-pointer font-lato font-[700] text-24px text-c-red leading-[36px]">
            Get started
          </p>
          <img src={Arrow} className=" w-[15%]" />
        </div>
      </div>
      <div className=" mt-[48px]">
        <div
          className="relative bg-cover bg-center rounded-[24px]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%), url(${CorporateEventImg})`,
            height: "444px",
          }}
        >
          <div className="absolute inset-0 rounded-[24px]"></div>

          <div className="absolute bottom-0 left-0 text-white p-4 flex flex-col gap-[24px]">
            <p className="font-figtree font-[900] text-f32">Corporate Events</p>
            <div className=" flex-row flex gap-[14px] ">
              <div className=" border rounded-[4px] flex flex-row justify-center items-center border-white w-[106px] h-[40px]">
                <p> Networking</p>
              </div>
              <div className=" border rounded-[4px] flex flex-row justify-center items-center border-white w-[106px] h-[40px]">
                <p>Trainings</p>
              </div>
              <div className=" border rounded-[4px] flex flex-row justify-center items-center border-white w-[106px] h-[40px]">
                <p>Award Night</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px] flex flex-row justify-between gap-[40px] ">
          <div className="flex flex-col w-[70%]">
            <div
              className="relative bg-cover bg-center rounded-[24px]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%), url(${ArtEventImg})`,
                height: "444px",
              }}
            >
              <div className="absolute inset-0 rounded-[24px]"></div>

              <div className="absolute bottom-0 left-0 text-white p-4 flex flex-col gap-[24px]">
                <p className="font-figtree font-[900] text-f32">
                  Arts and Entertainment
                </p>
              </div>
            </div>
            <div
              className="relative bg-cover bg-center rounded-[24px] mt-[40px]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%), url(${ReligiousEventImg})`,
                height: "444px",
              }}
            >
              <div className="absolute inset-0 rounded-[24px]"></div>

              <div className="absolute bottom-0 left-0 text-white p-4 flex flex-col gap-[24px]">
                <p className="font-figtree font-[900] text-f32">
                  Religious Events
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[30%]">
            <div
              className="relative bg-cover bg-center rounded-[24px] "
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%), url(${CareerrEventImg})`,
                height: "928px",
              }}
            >
              <div className="absolute inset-0 rounded-[24px]"></div>

              <div className="absolute bottom-0 left-0 text-white p-4 flex flex-col gap-[24px]">
                <p className="font-figtree font-[900] text-f32">
                  Career Events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
