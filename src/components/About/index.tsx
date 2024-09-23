import { useState } from "react";
import Arrow from "../../assets/Circle Arrow.png";
import CorporateEventImg from "../../assets/corporate-event.svg";
import CareerrEventImg from "../../assets/career-event.svg";
import ArtEventImg from "../../assets/artsandentertainment.svg";
import ReligiousEventImg from "../../assets/newReligion.svg";
import CorporateMobile from "../../assets/corporate-mobile.svg"
import CareerMobile from "../../assets/career-mobile.svg"
import ArtMobile from "../../assets/arts-mobile.svg"
import ReligiousMobile from "../../assets/religious-mobile.svg"

interface ButtonComponentProps {
  label: string;
}


const ButtonComponent = ({ label}: ButtonComponentProps) => {
  return (
      <div className="border rounded-[4px] flex flex-row justify-center items-center border-white w-[100px] lg:w-[106px] h-[40px]">
        <p>{label}</p>
      </div>
  );
};

const About = () => {
  const [isCorporateHovered, setIsCorporateHovered] = useState(false);
  const [isArtsHovered, setIsArtsHovered] = useState(false);
  const [isReligiousHovered, setIsReligiousHovered] = useState(false);
  const [isCareerHovered, setIsCareerHovered] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
      <div className="mt-12 lg:mt-[264px] w-[95%] mx-auto ">
        <div className="flex flex-row justify-between">
          <div>
            <p className="lg:text-f48 font-[900] font-figtree text-xl">
              With ChekPass, you can
              <br /> create events for:
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center self-end mt-7">
            <p className="cursor-pointer font-lato font-[700] text-sm lg:text-24px text-c-red leading-[36px]">
              Get started
            </p>
            <img src={Arrow} className="w-[15%]" />
          </div>
        </div>
        <div className="mt-[48px]">
          {/* Corporate Events */}
          <div
              className="relative bg-cover bg-center rounded-[24px] mt-[40px] h-[480px] lg:h-[444px] overflow-hidden"
              onMouseEnter={() => setIsCorporateHovered(true)}
              onMouseLeave={() => setIsCorporateHovered(false)}
          >
            <img
                src={isMobile ? CorporateMobile : CorporateEventImg}
                alt=""
                className={`absolute inset-0 h-full w-full transform transition-transform duration-500 object-cover rounded-2xl ${isCorporateHovered ? "scale-[1.15]" : ""}`}
            />
            <div className={`absolute left-0 text-white p-4 flex flex-col gap-[24px] ${isCorporateHovered ? "bottom-0 duration-500" : "duration-500 -bottom-16"}`}>
              <p className="font-figtree font-[900] text-f32">Corporate Events</p>
              <div
                  className={`flex-row gap-[14px] flex transition-opacity duration-500 ease-in-out ${
                      isCorporateHovered ? "opacity-100" : "opacity-0"
                  }`}
              >
                <ButtonComponent label="Networking" />
                <ButtonComponent label="Mentoring" />
                <ButtonComponent label="Learning" />
              </div>
            </div>
          </div>

          <div className="mt-[40px] flex flex-col lg:flex-row justify-between gap-[40px]">
            {/* Arts and Entertainment */}
            <div className="flex flex-col w-[95%] mx-auto lg:w-[60%] xl:w-[70%]">
              <div
                  className="relative bg-cover bg-center rounded-[24px] mt-[40px] h-[444px] overflow-hidden"
                  onMouseEnter={() => setIsArtsHovered(true)}
                  onMouseLeave={() => setIsArtsHovered(false)}
              >
                <img
                    src={isMobile ? ArtMobile : ArtEventImg}
                    alt=""
                    className={`absolute inset-0 h-full w-full transform transition-transform duration-500 object-cover rounded-2xl ${isArtsHovered ? "scale-[1.15]" : ""}`}
                />
                <div
                    className={`absolute left-0 text-white p-4 flex flex-col gap-[24px] ${isArtsHovered ? "bottom-0 duration-500" : "duration-500 -bottom-16"}`}>
                  <p className="font-figtree font-[900] text-f32">Arts and Entertainment</p>
                  <div
                      className={`flex-row gap-[14px] flex transition-opacity duration-500 ease-in-out ${
                          isArtsHovered ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <ButtonComponent label="Festival Event"/>
                    <ButtonComponent label="Concerts"/>
                    <ButtonComponent label="Art Exhibition"/>
                  </div>
                </div>
              </div>

              {/* Religious Events */}
              <div
                  className="relative rounded-[24px] mt-[40px] h-[444px] overflow-hidden"
                  onMouseEnter={() => setIsReligiousHovered(true)}
                  onMouseLeave={() => setIsReligiousHovered(false)}
              >
                <div className="w-[95%] mx-auto lg:w-[40%] mt-[40px] xl:w-[70%]">
                  <img
                      src={isMobile ? ReligiousMobile : ReligiousEventImg}
                      alt=""
                      className={`absolute inset-0 h-full w-full transform transition-transform duration-500 object-cover rounded-2xl ${isReligiousHovered ? "scale-[1.15]" : ""}`}
                  />
                  <div
                      className={`absolute left-0 text-white p-4 flex flex-col gap-[24px] ${isReligiousHovered ? "bottom-0 duration-500" : "duration-500 -bottom-16"}`}>
                    <p className="font-figtree font-[900] text-f32">Religious Events</p>
                    <div
                        className={`flex-row gap-[14px] flex transition-opacity duration-500 ease-in-out ${
                            isReligiousHovered ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <ButtonComponent label="Charity"/>
                      <ButtonComponent label="Conference"/>
                      <ButtonComponent label="Outreach"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Events */}
            <div className="w-[95%] mx-auto lg:w-[40%] mt-[40px] xl:w-[30%]">
              <div
                  className="relative bg-cover bg-center rounded-[24px] h-[480px] lg:h-[928px] overflow-hidden"
                  onMouseEnter={() => setIsCareerHovered(true)}
                  onMouseLeave={() => setIsCareerHovered(false)}
              >
                <img
                    src={isMobile ? CareerMobile : CareerrEventImg}
                    alt=""
                    className={`absolute inset-0 h-full w-full transform transition-transform duration-500 object-cover rounded-2xl ${isCareerHovered ? "scale-[1.15]" : ""}`}
                />
                <div
                    className={`absolute left-0 text-white p-4 flex flex-col gap-[24px] ${isCareerHovered ? "bottom-0 duration-500" : "duration-500 -bottom-16"}`}>
                  <p className="font-figtree font-[900] text-f32">Career Events</p>
                  <div
                      className={`flex-row flex gap-[14px] transition-opacity duration-500 ease-in-out ${
                          isCareerHovered ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <ButtonComponent label="Workshops"/>
                    <ButtonComponent label="Seminar"/>
                    <ButtonComponent label="Conference"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
