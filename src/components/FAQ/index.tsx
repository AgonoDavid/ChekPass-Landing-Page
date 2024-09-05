import { useState } from "react";
import BlackArrow from "../../assets/blackArrow.png";
import { Button } from "../Button";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    "Why ChekPass?",
    "When and how do I get my funds?",
    "What kind of event can I create on ChekPass?",
    "What are ChekPass charges?",
    "How do I verify my attendees tickets?",
  ];

  const answers = [
    {
      header: "Why ChekPass?",
      text: "We understand that selling your tickets is one thing and managing your attendees and interactions with your attendees is another thing. ChekPass is more than a ticketing platform as we keep building and providing all the tools you will need to give your attendees a unique experience right from ticketing. You will be happy that you got to know about ChekPass!",
      link: "https://reactjs.org/",
    },
    {
      header: "When and how do I get my funds?",
      text: "useState is a hook that lets you add state to functional components in React. It's part of the React hooks API.",
      link: "https://reactjs.org/docs/hooks-state.html",
    },
    {
      header: "What kind of event can I create on ChekPass?",
      text: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It’s highly customizable and helps to create designs directly in your HTML.",
      link: "https://tailwindcss.com/",
    },
    {
      header: "What are ChekPass charges?",
      text: "Components are the building blocks of a React application. You can create them as functions or classes.",
      link: "https://reactjs.org/docs/components-and-props.html",
    },
    {
      header: "How do I verify my attendees tickets?",
      text: "React hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, and useContext.",
      link: "https://reactjs.org/docs/hooks-intro.html",
    },
  ];

  return (
    <div className=" mt-[160px]">
      <p className="font-figtree font-[900] flex flex-row  justify-center text-f64">
        FAQs
      </p>
      <div className="flex justify-between mx-[75px] mt-[84px] gap-[98px] ">
        <div className="w-[638px]]">
          {questions.map((question, index) => (
            <div
              key={index}
              onClick={() => setActiveQuestion(index)}
              className={` mb-[40px] cursor-pointer py-[16px] pl-[24px]  text-f32 text-black font-figtree font-[900] border-l-8 ${
                activeQuestion === index
                  ? "border-c-red text-black"
                  : "border-transparent text-fade"
              } `}
            >
              {question}
            </div>
          ))}
        </div>

        {/* Right side with header, answer, and link */}
        <div className="w-2/3 h-[347px] p-6 bg-Section-Bg-Two rounded-[8px]">
          <h2 className=" leading-[20px] text-f20 font-[900] font-figtree">
            {answers[activeQuestion].header}
          </h2>
          <p className=" mt-[12px] mb-4 leading-[32px]">
            {answers[activeQuestion].text}
          </p>
          <div className=" w-[139px] float-right">
            <Button label="Next" variant="secondary" />
          </div>
          {/* <button className="flex flex-row items-center gap-[12px] border-[2px] mt-[24px] px-4 py-[13.5px] w-[139px] h-[51px] border-black hover:bg-gray-200">
            <a
              href={answers[activeQuestion].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-lato text-f18"
            >
              Next
            </a>
            <img
              src={BlackArrow}
              className="w-[10px] object-contain"
              alt="Arrow"
            />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
