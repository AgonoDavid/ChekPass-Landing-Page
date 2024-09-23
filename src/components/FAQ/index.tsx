/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Button } from "../Button";



const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);
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
      text: "We know that you need funds on the go to sort things out as you sell your tickets. We have built a system that allows you to withdraw your revenue into your bank account when needed, you get two free withdrawal within a week and additional withdrawals within the week attract a fee of #200.",
    },
    {
      header: "What kind of event can I create on ChekPass?",
      text: "Our current system allows you to create free and paid events. We're launching more event types soon such as; 1:1 events, recurring events, virtual events, strictly by invitation events etc.",
    },
    {
      header: "What are ChekPass charges?",
      text: <>Event creators have access to our free package for life and this gives you access to create events and basic tools that you will need to give an awesome experience for your event. Creating events is free of charge, we don't charge when people get your free tickets but we charge for each paid ticket fairly.
        <span className="underline">See pricing here</span></>,
    },
    {
      header: "How do I verify my attendees tickets?",
      text: "We want you to be secured and be rest assured that everyone in your event space actually got a ticket. We have built a check-in system that allows you to verify each ticket and prevents used tickets from being used. Our check-in system also allows you to keep track of when and how attendees got access into your event space. We've got you covered!",
    },
  ];

  const handleQuestionChange = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveQuestion(prevIndex => prevIndex === index ? null : index);
      setIsTransitioning(false);
    }, 120);
  };
  

  const handlePrevious = () => {
    if (activeQuestion !== null && activeQuestion > 0) {
      handleQuestionChange(activeQuestion - 1);
    }
  };

  const handleNext = () => {
    if (activeQuestion !== null && activeQuestion < questions.length - 1) {
      handleQuestionChange(activeQuestion + 1);
    }
  };
  // Internal PreviousButton component
  const PreviousButton = () => {
    if (activeQuestion !== null && activeQuestion > 0) {
      return (
          <Button
              label="Previous"
              variant="secondary"
              Click={handlePrevious}
              direction="previous"
          />
      );
    }
    return null;
  };

  // Internal NextButton component
  const NextButton = () => {
    if (activeQuestion !== null && activeQuestion < questions.length - 1) {
      return (
          <Button
              label="Next"
              variant="secondary"
              Click={handleNext}
              direction="next"
          />
      );
    }
    return null;
  };

  return (
      <div className="mt-[160px] mx-4 md:mx-[75px] ">
        <p className="font-figtree font-[900] flex flex-row justify-center text-4xl md:text-f64">
          FAQs
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full mt-[84px] md:gap-[98px]">
          <div className="w-full md:w-[638px]">
            {questions.map((question, index) => (
                <div key={index} className="mb-[40px]">
                  <div
                      onClick={() => handleQuestionChange(index)}
                      className={`cursor-pointer py-[16px] pl-[24px] text-xl md:text-f32 text-black font-figtree font-[900] border-l-8 ${
                          activeQuestion === index
                              ? "border-c-red text-black"
                              : "border-transparent text-fade"
                      }`}
                  >
                    {question}
                  </div>
                  {/* Answer for small screens */}
                  <div
                      className={`md:hidden mt-4 duration-500 ${activeQuestion === index ? 'block duration-500' : 'duration-500 hidden'}`}>
                    <div className="bg-Section-Bg-Two p-6 rounded-[8px]">
                      <h2 className="text-lg font-[900] font-figtree mb-2">
                        {answers[index].header}
                      </h2>
                      <p className="mt-[12px] mb-4 leading-[24px] md:leading-[32px]">
                        {answers[index].text}
                      </p>
                      <div className="flex justify-between">
                        {/* Previous Button */}
                        <PreviousButton/>
                        <NextButton/>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Right side with header, answer, and link - visible only on larger screens */}
          <div className="hidden md:block w-2/3">
            <div className={`bg-Section-Bg-Two p-6 rounded-[8px] `}>
              {activeQuestion !== null && (
                  <>
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
                      <PreviousButton/>
                      <NextButton/>
                    </div>
                  </>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default FAQ;