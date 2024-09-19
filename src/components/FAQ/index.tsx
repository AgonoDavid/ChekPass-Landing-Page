import { SetStateAction, useState } from "react";
import { Button } from "../Button";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    },
    {
      header: "When and how do I get my funds?",
      text: "useState is a hook that lets you add state to functional components in React. It's part of the React hooks API.",
    },
    {
      header: "What kind of event can I create on ChekPass?",
      text: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It’s highly customizable and helps to create designs directly in your HTML.",
    },
    {
      header: "What are ChekPass charges?",
      text: "Components are the building blocks of a React application. You can create them as functions or classes.",
    },
    {
      header: "How do I verify my attendees tickets?",
      text: "React hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, and useContext.",
    },
  ];

  const handleQuestionChange = (index: SetStateAction<number>) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveQuestion(index);
      setIsTransitioning(false);
    }, 120);
  };

  const handlePrevious = () => {
    if (activeQuestion > 0) {
      handleQuestionChange(activeQuestion - 1);
    }
  };

  const handleNext = () => {
    if (activeQuestion < questions.length - 1) {
      handleQuestionChange(activeQuestion + 1);
    }
  };

  return (
    <div className="mt-[160px] mx-[75px]">
      <p className="font-figtree font-[900] flex flex-row justify-center text-f64">
        FAQs
      </p>
      <div className="flex justify-between w-[100%] mt-[84px] gap-[98px]">
        <div className="w-[638px]">
          {questions.map((question, index) => (
            <div
              key={index}
              onClick={() => handleQuestionChange(index)}
              className={`mb-[40px] cursor-pointer py-[16px] pl-[24px] text-f32 text-black font-figtree font-[900] border-l-8 ${
                activeQuestion === index
                  ? "border-c-red text-black"
                  : "border-transparent text-fade"
              }`}
            >
              {question}
            </div>
          ))}
        </div>

        {/* Right side with header, answer, and link */}
        <div className="w-2/3">
          <div className={`bg-Section-Bg-Two p-6 rounded-[8px] `}>
            <h2
              className={`leading-[20px] text-f20 font-[900] font-figtree transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {answers[activeQuestion].header}
            </h2>
            <p
              className={`mt-[12px] mb-4 leading-[32px] transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {answers[activeQuestion].text}
            </p>
            <div className="flex justify-between">
              {/* Previous Button */}
              <div className=" ">
                {activeQuestion > 0 && (
                  <Button
                    label="Previous"
                    variant="secondary"
                    Click={handlePrevious}
                    direction="previous"
                  />
                )}
              </div>

              {/* Next Button */}
              <div className=" w-[139px]">
                {activeQuestion < questions.length - 1 && (
                  <Button
                    label="Next"
                    variant="secondary"
                    Click={handleNext}
                    direction="next"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
